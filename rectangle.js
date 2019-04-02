$(function() {

    var $width = $('#width'),

      $height = $('#height'),

      $btnCal = $('#calculate'),

      $perimeter = $('#perimeter'),

      $area = $('#area'),

      $widthValidate = $('#width-validate'),

      $heightValidate = $('#height-validate'),

      isPassValidate = false;
$btnCal.click(function(){
      if(!isPassValidate) return;
          var w = $width.val(),
          h = $height.val();
    var r = new Rectangle(w, h);
        $perimeter.val(r.perimeter());
            $area.val(r.area());              
});
});
