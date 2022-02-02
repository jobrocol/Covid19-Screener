var covid19Screener = (function () {
  function setup() {
    $("#submitRequest").click(function () {
      submit();
    });
  }

  function submit() {
    $("#clearedContainer").hide();
    $("#notClearedContainer").hide();
    if (validate() === false) return;
    getResults();
  }

  function validate() {
    $("#message").html("");
    let valid = true;
    if (!$("input[name='symptoms']:checked").val()) {
      valid = false;
    }
    if (!$("input[name='contact']:checked").val()) {
      valid = false;
    }
    if (!$("input[name='isolating']:checked").val()) {
      valid = false;
    }
    if (!$("input[name='covidTest']:checked").val()) {
      valid = false;
    }
    if (valid === false) {
      $("#message").html("Please answer all questions");
    }
    return valid;
  }

  function getResults() {
    if (
      $("input[name='symptoms']:checked").val() === "yes" ||
      $("input[name='contact']:checked").val() === "yes" ||
      $("input[name='isolating']:checked").val() === "yes" ||
      $("input[name='covidTest']:checked").val() === "yes"
    ) {
      $("#notClearedContainer").slideDown();
    } else {
      $("#clearedContainer").slideDown();
    }
  }
  return {
    init: function () {
      setup();
    }
  };
})();
