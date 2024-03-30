const routerProjects =  require("./projectRouter");

module.exports = (app)=>{
    app.use(routerProjects);

    // console.log("\nentrou aqui\n" + routerProjects);
}