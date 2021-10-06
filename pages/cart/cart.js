let pluses = document.querySelectorAll(".inc");
      let minuses = document.querySelectorAll(".dec");

      pluses.forEach((plus) => {
        plus.addEventListener("click", function (e) {
          e.preventDefault();
          let input = this.closest("div").querySelector("input");
          let amount = parseInt(input.value);

          if (amount < 99) {
            amount++;
          } else {
            amount = 99;
          }

          input.value = amount;
        });
      });

      minuses.forEach((minus) => {
        minus.addEventListener("click", function (e) {
          e.preventDefault();
          let input = this.closest("div").querySelector("input");
          let amount = parseInt(input.value);

          if (amount > 1) {
            amount--;
          } else {
            amount = 0;
          }

          input.value = amount;
        });
      });