Cut.Loader.load(function(root, container) {

  Cut.Mouse.subscribe(root, container, true);

  root.viewbox(200, 200);

  Cut.image("base:box").tile().appendTo(root).pin({
    width : 64,
    height : 64,
    align : 0.5
  }).on(Cut.Mouse.CLICK, function(ev, point) {
    this.tween().clear().pin({
      width : Cut.Math.random(32, 96),
      height : Cut.Math.random(32, 96)
    });
    return true;
  });

});
