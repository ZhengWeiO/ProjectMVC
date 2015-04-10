(function(){

    brite.registerView("Groups",{

        create: function(){
            return app.projectDao.list({orderBy:"name"}).pipe(function(result){
                return render("Groups",{projects:result});
            });
        },

        postDisplay: function(){
            var view = this;
            view.$addNewProject = view.$el.find(".add-new-project");
            selectCurrentProject.call(this);
        }

    });

})();
