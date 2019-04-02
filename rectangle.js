$(function() {

    var $width = $('#width'),

      $height = $('#height'),

      //$btnCal = $('#calculate'),
      $form=$('form')

      $perimeter = $('#perimeter'),

      $area = $('#area'),

      $widthValidate = $('#width-validate'),

      $heightValidate = $('#height-validate'),

      isPassValidate = false;
$form.submit(function(e){
      //if(!isPassValidate) return;
      e.preventDefault();
          var w = $width.val(),
          h = $height.val();
    var r = new Rectangle(w, h);
        $perimeter.val(r.perimeter());
            $area.val(r.area());              
});
});
