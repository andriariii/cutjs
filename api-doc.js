//
// ### Cut
//
// Create a new plain cut instance.
// No painting is associated with a plain cut, it is just a parent for other cuts.
var foo = Cut.create();

// Append/prepend bar, baz, ... to foo children.
foo.append(bar, baz, etc);
foo.prepend(bar, baz, etc);

// Append/prepend bar to foo children.
bar.appendTo(foo);
bar.prependTo(foo);

// Insert baz, qux, ... after/before bar.
bar.insertNext(baz, qux, etc);
bar.insertPrev(baz, qux, etc);

// Insert baz after/before bar.
baz.insertAfter(bar);
baz.insertBefore(bar);

// Remove bar from parent.
bar.remove();

// Remove bar, baz, ... from foo.
foo.remove(bar, baz, etc);

// Remove all foo children.
foo.empty();

// Get foo first/last (visible) child.
foo.first(visible = false);
foo.last(visible = false);

// Get immediate parent.
bar.parent();

// Get top parent or self.
bar.top();

// Get bar next/prev (visible) sibling.
bar.next(visible = false);
bar.prev(visible = false);

// Get or set bar visiblity.
bar.visible();
bar.visible(visible);
bar.hide();
bar.show();

// Get or set single pinning value.
bar.pin(name);
bar.pin(name, value);

// Set one or more pinning values.
// If `nameX` equals `nameY`, `name` shorthand can be used instead.
// For relative values 0 is top/left and 1 is bottom/right.
bar.pin({
  // Transparency applied to self and children.
  alpha : "",
  // Transparency applied to only to self textures.
  textureAlpha : "",
  scaleX : "",
  scaleY : "",
  skewX : "",
  skewY : "",
  rotation : "",
  // Set automatically based on cut type, used for relative pinning values.
  width : "",
  height : "",
  // Relative location on self used as scale/skew/rotation center.
  pivotX : "",
  pivotY : "",
  // Relative location on self used for positioning .
  handleX : "",
  handleY : "",
  // Relative location on parent used for positioning.
  alignX : "",
  alignY : "",
  // Positioning offset in pixel.
  offsetX : "",
  offsetY : "",
  // Scale and resize to width/height.
  resizeMode : "", // "in"/"out"
  resizeWidth : "",
  resizeHeight : ""
});

// Ticker is called on ticking before every paint, it can be used to modify the
// cut.
foo.tick(ticker, beforeChildren = false);

// Register a type-listener to bar.
foo.listen(type, listener);

// Get type-listeners registered to bar.
foo.listeners(type);

// Call type-listeners with args.
foo.publish(type, args);

// Visit the tree belowe foo.
foo.visit({
  start : function() {
    return skipChildren ? true : false;
  },
  end : function() {
    return stopVisit ? true : false;
  },
  reverse : reverseChildrenOrder ? true : false,
  visible : onlyVisibleCuts ? true : false
});

// Rendering pauses unless/until at least one cut is touched directly or
// indirectly.
foo.touch();

//
// ### Row
//
// Create a new row.
// A row is a cut which organizes its children as a horizontal sequence.
var row = Cut.row(valign = 0);

//
// ### Column
//
// Create a new column.
// A column is a cut which organizes its children as a vertical sequence.
var column = Cut.column(halign = 0);

//
// ### Cut
//
// Create a new image instance.
// An image is a cut which pastes a cutout.
var image = Cut.image("textureName:cutoutName");

// Change image.
image.setImage("textureName:cutoutName");

// Crop image.
image.cropX(w, x = 0);
image.cropY(h, y = 0);

//
// ### Anim(Clip)
//
// Create a new anim instance.
// An anim is a cut which have a set of cutouts and pastes a cutout at a time.
var anim = Cut.anim("textureName:cutoutPrefix", fps = Cut.Anim.FPS);

// Get or set anim fps.
anim.fps();
anim.fps(fps);

// Set anim cutouts.
anim.setFrames("textureName:cutoutPrefix");

anim.gotoFrame(n, resize = false);

anim.gotoLabel("cutoutName", resize = false);

anim.randomFrame();

anim.moveFrame(n);

anim.play(reset = false);

anim.stop(frame = null);

anim.repeat(repeat, callback = null);

//
// ### String
//
// Create a new string (sequence) instance.
// String is a row of anim cuts.
Cut.string("textureName:cutoutPrefix");

string.setFont("textureName:cutoutPrefix");

// set string value
string.setValue(value);

//
// ### Nine Patch
//
// Create a new nine-patch from a cutout.
// Use top, bottom, left and right to define the nine-patch when adding a
// texture.
var np = Cut.ninePatch("textureName:cutoutName");

// Set nine-patch cutout.
np.setImage("textureName:cutoutName");

// Set inner size of nine-patch.
np.inner(width, height);

// Set outer size of nine-patch.
np.outer(width, height);

//
// ### Textures
//
// Register a texture, images are automatically loaded by Cut.Loader.
Cut.addTexture({
  name : "",
  imagePath : "",
  imageRatio : "",
  filter : "",
  ratio : "",
  cutouts : [ {
    name : "",
    x : "",
    y : "",
    width : "",
    height : "",
    // Optional, used by nine-patch:
    top : "",
    bottom : "",
    left : "",
    right : ""
  }, etc ]
}, etc);

//
// ### Mouse(Touch)
//
// Subscribe a cut app to mouse/touch events.
Cut.Mouse.subscribe(rootCut, container);

// Add listener to cut objects.
foo.listen(Cut.Mouse.CLICK, function(event, point) {
  // point is relative to this cut
});

//
// ### Loader
//
// Load a cut app in container element.
Cut.Loader.load(function(container) {
  // ...
  return rootCut;
});

//
// ### Extending Cut
//
// Home extends Cut.
function Home(app) {
  Home.prototype._super.apply(this, arguments);
  // ...
}
Home.prototype = new Cut(Cut.Proto);
Home.prototype._super = Cut;
Home.prototype.constructor = Home;
Home.prototype.fun = function() {
  // ...
};