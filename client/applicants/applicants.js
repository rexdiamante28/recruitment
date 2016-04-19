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

Template.applicantResume.onRendered(function(){
    var url =  'http://localhost:3000/';
    url+=Applicants.findOne({_id:applicantId}).avatar;
    getBase64FromImageUrl(url);

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
                    image:''+sessionStorage.getItem('pdfImage'),
                    width: 100
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [100, 300],
                        body: [
                            [ {text: '\nDate Applied :', style:'bold'}, '\n'+moment(applicant.dateApplied).format('MMMM-DD-YYYY'), ],
                            [ {text: 'Position Applied :', style:'bold'}, ''+applicant.positionApplied,  ],
                        ]
                    },
                    layout: 'noBorders'
                },
                {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
                {text: 'Personal Information \n', style:'bolder'},
                {
                    table: {
                        headerRows: 1,
                        widths: [100, 300],
                        body: [
                            [ {text: '\nName :', style:'bold'}, '\n'+applicant.name, ],
                            [ {text: 'Sex :', style:'bold'}, ''+applicant.sex,  ],
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
                            [ {text: 'Cellphone Number :', style:'bold'}, ''+applicant.cellphoneNumber, ],
                            [ {text: 'Email Address :', style:'bold'}, ''+applicant.email,  ],
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [100, 300],
                        body: [
                            [ {text: 'Civil Status :', style:'bold'}, ''+applicant.civilStatus, ],
                            [ {text: 'Age :', style:'bold'}, ''+GetAge(applicant.dateOfBirth),  ],
                            [ {text: 'Date of Birth :', style:'bold'}, ''+FormatDate(applicant.dateOfBirth,'MMMM-DD-YYYY'),  ],
                        ]
                    },
                    layout: 'noBorders',

                },
                {text: '\n'},
                {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
                {text: 'Professional Experience \n', style:'bolder'}

            ],
            styles: {
                bold: {
                    fontSize: 12,
                    bold: true,
                    alignment: 'right'
                },
                bolder: {
                    fontSize: 14,
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
                        [ {text: '\n Position Title :', style:'bold'}, '\n'+applicant.professionalExperience[a].Position, ],
                        [ {text: 'Company :', style:'bold'}, ''+applicant.professionalExperience[a].Company,  ],
                        [ {text: 'From-To :', style:'bold'}, ''+FormatDate(applicant.professionalExperience[a].From, 'MMM-DD-YYYY') +' - '+FormatDate(applicant.professionalExperience[a].To,'MMM-DD-YYYY'),  ],
                        [ {text: 'Duties and Responsibilities :', style:'bold'}, ''+applicant.professionalExperience[a].DutiesAndResponsibilities,  ],
                        [ {text: 'Reason for Leaving :', style:'bold'}, ''+applicant.professionalExperience[a].ReasonForLeaving,  ],
                        [ {text: 'Salary :', style:'bold'}, ''+applicant.professionalExperience[a].Salary,  ],
                    ]
                },
                layout: 'noBorders',
            });
        }

        var techSkills = "";
        for(var a =0; a<applicant.technicalSkills.length; a++){
           techSkills+=("*"+applicant.technicalSkills[a].TechnicalSkill+"\n");
        }
        dd.content.push({
            table: {
                headerRows: 1,
                widths: [100, 300],
                body: [
                    [ {text: 'Technical Skills :', style:'bold'}, ''+techSkills, ],
                ]
            },
            layout: 'noBorders',
        });

        dd.content.push({text: '\n'});
        dd.content.push({canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]});
        dd.content.push({text: 'Educational History', style:'bolder'});

        for(var a =0; a<applicant.educationalHistory.length; a++){
            dd.content.push({
                table: {
                    headerRows: 1,
                    widths: [100, 300],
                    body: [
                        [ {text: '\nLevel :', style:'bold'}, '\n'+applicant.educationalHistory[a].Level, ],
                        [ {text: 'Name of School :', style:'bold'}, ''+applicant.educationalHistory[a].NameOfSchool,  ],
                        [ {text: 'Degree / Course :', style:'bold'}, ''+applicant.educationalHistory[a].DegreeOrCourse,  ],
                        [ {text: 'School Year :', style:'bold'}, ''+applicant.educationalHistory[a].SchoolYear,  ],
                        [ {text: 'Honors / Scholarship received :', style:'bold'}, ''+applicant.educationalHistory[a].HonorsOrScholarshipsReceived,  ],
                    ]
                },
                layout: 'noBorders',
            });
        }

        dd.content.push({text: '\n'});
        dd.content.push({canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]});
        dd.content.push({text: 'Character References', style:'bolder'});

        for(var a =0; a<applicant.characterReferences.length; a++){
            dd.content.push({
                table: {
                    headerRows: 1,
                    widths: [100, 300],
                    body: [
                        [ {text: '\n Name :', style:'bold'}, '\n'+applicant.characterReferences[a].Name, ],
                        [ {text: 'Position Title :', style:'bold'}, ''+applicant.characterReferences[a].PositionTitle,  ],
                        [ {text: 'Company :', style:'bold'}, ''+applicant.characterReferences[a].Company,  ],
                        [ {text: 'Professional Relationship :', style:'bold'}, ''+applicant.characterReferences[a].ProfessionalRelationship,  ],
                        [ {text: 'Contact Number :', style:'bold'}, ''+applicant.characterReferences[a].ContactNumber,  ],
                    ]
                },
                layout: 'noBorders',
            });
        }


        // Start the pdf-generation process
        pdfMake.createPdf(dd).open();
    }
})
