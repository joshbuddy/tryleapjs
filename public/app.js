$(function() {
  function LiveEditor(element) {
    var editor = this;
    var el = this.el = $("#"+element.id);
    this.codemirror = CodeMirror.fromTextArea(element);
    this.codemirror.on('change', function() {
      editor.update();
    });

    $('.reset').on('click', function() {
      editor.codemirror.setValue(el.val());
    });
  }

  LiveEditor.prototype.update = function() {
    try {
      eval(this.codemirror.getValue());
      $(".error-pane").remove();
    } catch (e) {
      if ($('.error-pane').length == 0) {
        $(".CodeMirror").after('<div class="error-pane hide"></div>');
        $('.error-pane').html(e.toString()).slideDown();
      } else {
        $('.error-pane').html(e.toString());
      }
    }
  };

  var editor = new LiveEditor(document.getElementById('main-editor'));
  editor.update();
});