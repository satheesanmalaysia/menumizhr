
      function updateProgress(percent) {
        const rightBar = document.getElementById("right-bar");
        const leftBar = document.getElementById("left-bar");
        const progressValue = document.getElementById("progress-value");

        let angle = percent * 3.6;

        if (percent <= 50) {
          rightBar.style.transform = `rotate(${angle}deg)`;
          leftBar.style.transform = "rotate(180deg)";
        } else {
          rightBar.style.transform = "rotate(180deg)";
          leftBar.style.transform = `rotate(${angle - 180}deg)`;
        }

        progressValue.textContent = `50%`;
      }

      // Example usage
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
        } else {
          progress++;
          updateProgress(progress);
        }
      }, 50);

      function showPopup(status, name) {
        document.getElementById("popup").style.display = "block";
        document.getElementById("output").innerHTML = status;
        document.getElementById("name").innerHTML = name;
      }

      function hidePopup() {
        document.getElementById("popup").style.display = "none";
      }

      function confirmAction() {
        console.log("Confirm Action");
        hidePopup();
      }

      const listItems = document.querySelectorAll("#sideMenu li");

      // Add click event listener to each <li> element
      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          alert(`You clicked on ${item.textContent}`);
        });
      });

      const divItems = document.querySelectorAll("#topbar .item");

      divItems.forEach((item) => {
        item.addEventListener("click", () => {
          // Remove 'clicked' class from all items
          divItems.forEach((i) => i.classList.remove("clicked"));
          // Add 'clicked' class to the clicked item
          item.classList.add("clicked");
          alert(`You clicked on ${item.textContent}`);
        });
      });

      function monthView(e) {}
      const monthbutton = document.getElementById("monthButton");
      const listbutton = document.getElementById("listButton");

      // Add click event listener to the button
      monthbutton.addEventListener("click", () => {
        monthbutton.classList.remove("button2");
        monthbutton.classList.add("button1");
        listbutton.classList.add("button2");
        alert("Month View clicked!");
      });
      listbutton.addEventListener("click", () => {
        listbutton.classList.remove("button2");
        listbutton.classList.add("button1");
        monthbutton.classList.add("button2");
        alert("List View clicked!");
      });
 