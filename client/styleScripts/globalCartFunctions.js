addToCart = function(data){
    checkUser();
    var price = parseFloat(data.price);
    var quantity = parseFloat(data.quantity);

    if(checkItemInCart(data.ownerId,data.tempId,data.skuId)){
        //get the current quantity order of the user
        var oldQty = parseFloat(UserCarts.findOne({$or:[
            {ownerId:data.ownerId,skuId: data.skuId},
            {tempId: data.tempId, skuId: data.skuId}
        ]}).quantity);
        quantity+=oldQty;

        var id = UserCarts.findOne({$or:[
            {ownerId:data.ownerId,skuId: data.skuId},
            {tempId: data.tempId, skuId: data.skuId}
        ]})._id;

        UserCarts.update({_id:id},{
            $set:{
                quantity:quantity,
                lineTotal:quantity*price
            }
        })
    }
    else{
        UserCarts.insert({
            ownerId: data.ownerId,
            tempId: getCookie('temp_session'),
            name: data.name,
            unit:data.unit,
            price:data.price,
            quantity:data.quantity,
            productId:data.productId,
            skuId:data.skuId,
            description:data.description,
            category:data.category,
            url: data.url,
            lineTotal:quantity*price
        },function(error,result){
            if(error){}
            else{
                alertify.success('order added');
            }
        })
    }
}
checkItemInCart = function(ownerId,tempId,skuId){
    if(UserCarts.findOne({$or:[
            {ownerId:ownerId,skuId: skuId},
            {tempId: tempId, skuId: skuId}
        ]})){
        return true;
    }
    else{
        return false;
    }

}


checkUser = function(){
    if(sessionStorage.getItem('validId')){
        return true;
    }
    else{
        if(getCookie('temp_session')==""){
            manageCookie();
        }
        return  false;
    }
}

getBase64FromImageUrl = function(url) {
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        Photo = dataURL;
        sessionStorage.setItem('pdfImage',dataURL);
    };

    img.src = url;
}