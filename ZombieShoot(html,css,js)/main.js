let shotCount = 0;

function fire() {
  document.getElementById("gun_fire").style.display = "block";
  setTimeout(function () {
    document.getElementById("gun_fire").style.display = "none";
  }, 500);
  var getShot = document.getElementById("trail");
  getShot.classList.remove("z_runway");
      

  if (shotCount > 12) {
    alert("No more shots.");
    return false;
  }
  switch (shotCount) {
    case 1:
        if (shotCount = 1) {
        var shott = document.getElementById("byshot1");
        var aftershott = document.getElementById("myweaponfire");

        setTimeout(function () {
          shott.classList.add("zombie1_dead");
          aftershott.classList.add("aftrshot_gun");
          setTimeout(function () {
            document.getElementById("byshot1").style.display = "none";
            setTimeout(function () {
              document.getElementById("trail").classList.remove("zone");
              document.getElementById("trail").classList.add("trail_a");
            }, 1000);
            shott.classList.remove("zombie1_dead");
            aftershott.classList.remove("aftrshot_gun");
          }, 800);
        }, 1000);
    }
    break;
    case 3:
    if (shotCount = 3) {
        var shott1 = document.getElementById("byshot2");
        var aftershott1 = document.getElementById("myweaponfire");
        setTimeout(function () {
          shott1.classList.add("shot");
          aftershott1.classList.add("aftrshot_gun");
          setTimeout(function () {
            document.getElementById("byshot2").style.display = "none";
            setTimeout(function () {
              document.getElementById("trail").classList.remove("trail_a");
              document.getElementById("trail").classList.remove("trail_b");
              document.getElementById("trail").classList.add("trail_c");
            }, 1000);
            shott1.classList.remove("shot");
            aftershott1.classList.remove("aftrshot_gun");
          }, 800);
        }, 1000);
    }
    break;

    case 5:
        if (shotCount = 5) {
        var shott2 = document.getElementById("byshot3");
        var aftershott2 = document.getElementById("myweaponfire");
        setTimeout(function () {
          shott2.classList.add("shot");
          aftershott2.classList.add("aftrshot_gun");
          setTimeout(function () {
            document.getElementById("byshot3").style.display = "none";
            setTimeout(function () {
                document.getElementById("trail").classList.remove("trail_a");
              document.getElementById("trail").classList.remove("trail_b");
              document.getElementById("trail").classList.add("trail_c");
            }, 1000);
            shott2.classList.remove("shot");
            aftershott2.classList.remove("aftrshot_gun");
          }, 800);
        }, 1000);
    }
    break;

      default:
      break;
  }
  shotCount++;
}


