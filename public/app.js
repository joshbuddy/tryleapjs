$(function() {
  function LiveEditor(element) {
    this.codemirror = CodeMirror.fromTextArea(element);
    var editor = this;
    this.el = $("#"+element.id);
    this.el.on('mouseover', function() {
      editor.update();
    });
  }

  LiveEditor.prototype.update = function() {
    console.log("running script! "+this.el.val());
    eval(this.el.val());
  };

  var editor = new LiveEditor(document.getElementById('main-editor'));
  editor.update();
});