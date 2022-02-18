$(document).ready(function(){
  $("#button1").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
      alert("the paragraph is now hidden")
  });


  $("#button").click(function(){
    $("#p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });

  $("#but").click(function(){
    $("#div1").load("test.txt", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        alert("External content loaded successfully!");
      if(statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });

  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });

  $("#btn3").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn4").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn5").click(function(){
    $("#test3").val("Dolly Duck");
  });

  // var jq = $.noConflict();
  // jq(document).ready(function(){
  //   jq("#two").click(function(){
  //     jq("#one").text("jQuery is still working!");
  //   });
  // });
});