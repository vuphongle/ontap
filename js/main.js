$(document).ready(function () {
    
    var txtten = $("#txtten");
    var tbTen = $("#tbTen") 
    function kiemtraten() {
        var ktr = /^[A-Z]{1}[a-z]*(\s[A-Z][a-z]*)*$/
        if(txtten.val() === ""){
            tbTen.html("* Bắt buộc nhập");
            return false;
        }

        if(!ktr.test(txtten.val())) {
            tbTen.html("*Vui lòng nhập đúng cú pháp");
            return false;
        }

        tbTen.html("*");
        return true;
    }
    txtten.blur(kiemtraten);

    var tbNgaySinh = $("#tbNgaySinh");
    var ns = $("#txtNgaySinh");
    function ktrnamsinh() {
    var dob = new Date(ns.val());
    var age = (new Date()).getFullYear() - dob.getFullYear();
    if (ns.val() === "") {
        tbNgaySinh.html("Vui lòng nhập đủ thông tin");
        return false;
    }
    if (age < 18) {
        tbNgaySinh.html("Bạn chưa đủ 18 tuổi");
        return false;
    }
    tbNgaySinh.html("");
    return true;
    }
    ns.blur(ktrnamsinh);

//Kiểm tra giới tính
    var gioitinh;
    function ktrgioitinh() {
        if ($('#gtnam').prop('checked')) {
          gioitinh = $('#gtnam').val();
        } else if ($('#gtnu').prop('checked')) {
          gioitinh = $('#gtnu').val();
        } else {
          $('#tbgioitinh').html('Vui lòng chọn giới tính.');
          return flase;
        }
        $('#tbgioitinh').html('*');
        return true;
      }

      var quocgia = document.getElementById("quocgia");
if (quocgia.selectedIndex == 0) {
  alert("Vui lòng chọn quốc gia");
} else {
  var val = quocgia.options[quocgia.selectedIndex].value;
  alert("Bạn đã chọn quốc gia " + val);
}


    $("#btnSave").click(function () { 
        if(kiemtraten() && ktrnamsinh()){
            var ten = $("#txtten").val();  
            var tuoi = $("#txttuoi").val();
            if ($('#gtnam').prop('checked')) {
                gioitinh = $('#gtnam').val();
              } else if ($('#gtnu').prop('checked')) {
                gioitinh = $('#gtnu').val();
              }
            var them = "<tr><td>" + ten + "</td><td>" +tuoi+ "</td><td>"+gioitinh+"</td></tr>"
    
            $("table tbody").append(them);
            $("#modaltour").modal("hide");
            return true;
        }
    });
});