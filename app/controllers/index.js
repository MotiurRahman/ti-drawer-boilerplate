 Alloy.Globals.windowStack.open(
    Alloy.createController('rootA').getView(),
    $.drawer
);

// set side menu view
$.drawer.setLeftWindow(
    Alloy.createController('sidemenu').getView()
);

// Add drawer to global for common use
Alloy.Globals.drawer = $.drawer;
$.drawer.addEventListener('close', function() {
    Alloy.Globals.drawer = null;
});

$.drawer.open();

