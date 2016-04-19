Template.applicants.helpers({
    applicants: function () {
        return {
            collection: Applicants,
            rowsPerPage: 30,
            showFilter: true,
            fields: [
                { key: 'name', label: 'Full Name' },
                { key: 'sex', label: 'Gender' },
                { key: 'positionApplied', label: 'Target Position' },
                { key: 'applicantStatus', label: 'Status' },
                {
                    key: '_id',
                    label: 'Edit',
                    fn: function (value) {
                        return new Spacebars.SafeString("<a href=/applicants/" + value + ">View</a>");
                    }
                }
            ]
        };
    }
})

Template.applicantResume.helpers({
    Record: function(){
        return Applicants.findOne({_id: applicantId});
    },
    Status: function(){
        return HiringStages.find({},{$sort:{Number: 1}});
    },
    Companies: function(){
        return Companies.find({});
    },
    Notes: function(){
        return Notes.find({applicantID: applicantId}).count();
    }
})


Template.applicantEdit.helpers({
    thisDoc: function(){
        return Applicants.findOne({_id: applicantId});
    }
})

Template.applicantResume.events({
    'click .statusAction': function(event){
        var action = event.currentTarget.id;
        Applicants.update({_id:applicantId},{
            $set:{
                applicantStatus: action
            }
        })
    },
    'click .companyAction': function(event){
        var action = event.currentTarget.id;
        Applicants.update({_id:applicantId},{
            $set:{
                companyAssignment: action
            }
        })
    },
    'click .pdf': function () {
        var applicant = Applicants.findOne({_id:applicantId})

        var education="";
        var professionalExperience="";
        var characterReference = "";

        var dd = {
            content: [
                {
                    table: {
                        headerRows: 1,
                        widths: [100, 300],
                        body: [
                            [ {text: 'Date Applied :', style:'bold'}, ''+moment(applicant.dateApplied).format('MMMM-DD-YYYY'), ],
                            [ {text: 'Position Applied :', style:'bold'}, ''+applicant.positionApplied,  ],
                        ]
                    },
                    layout: 'noBorders'
                },
                {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
                {
                    table: {
                        headerRows: 1,
                        widths: [100, 300],
                        body: [
                            [ {text: 'Name :', style:'bold'}, ''+moment(applicant.dateApplied).format('MMMM-DD-YYYY'), ],
                            [ {text: 'Sex :', style:'bold'}, ''+applicant.positionApplied,  ],
                            [ {text: 'Present Address :', style:'bold'}, ''+applicant.positionApplied,  ],
                            [ {text: 'Contact Details', style:'bold'}, '', ],
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [200, 300],
                        body: [
                            [ {text: 'Cellphone Number :', style:'bold'}, ''+moment(applicant.dateApplied).format('MMMM-DD-YYYY'), ],
                            [ {text: 'Email Address :', style:'bold'}, ''+applicant.positionApplied,  ],
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [100, 300],
                        body: [
                            [ {text: 'Civil Status :', style:'bold'}, ''+moment(applicant.dateApplied).format('MMMM-DD-YYYY'), ],
                            [ {text: 'Age :', style:'bold'}, ''+applicant.positionApplied,  ],
                            [ {text: 'Date of Birth :', style:'bold'}, ''+applicant.positionApplied,  ],
                        ]
                    },
                    layout: 'noBorders',

                },

                {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
            ],
            styles: {
                bold: {
                    fontSize: 12,
                    bold: true,
                    alignment: 'right'
                },
                bolder: {
                    fontSize: 20,
                    bold: true
                }
            },
            defaultStyle: {
                // alignment: 'justify'
            }
        }


        for(var a =0; a<applicant.professionalExperience.length; a++){
            dd.content.push({
                table: {
                    headerRows: 1,
                    widths: [100, 300],
                    body: [
                        [ {text: 'Position Title :', style:'bold'}, ''+moment(applicant.dateApplied).format('MMMM-DD-YYYY'), ],
                        [ {text: 'Company :', style:'bold'}, ''+applicant.positionApplied,  ],
                        [ {text: 'From-To :', style:'bold'}, ''+applicant.positionApplied,  ],
                        [ {text: 'Duties and Responsibilities :', style:'bold'}, ''+applicant.positionApplied,  ],
                        [ {text: 'Reason for Leaving :', style:'bold'}, ''+applicant.positionApplied,  ],
                        [ {text: 'Salary :', style:'bold'}, ''+applicant.positionApplied,  ],
                    ]
                },
                layout: 'noBorders',
            });
        }


        // Start the pdf-generation process
        pdfMake.createPdf(dd).open();
    }
})
