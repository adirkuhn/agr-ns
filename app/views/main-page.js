var vmModule = require("../view-model/main-view-model");
var frameModule = require("ui/frame");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function register() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/cadastro-etapa1");
}

exports.pageLoaded = pageLoaded;
exports.register = register;

