(async () => {
     const {value: Country} = await Swal.fire({
          title: "Welcome!",
          text: "I hope you like my website.",
          icon: "question",
          confirmButtonText: "To select",
          footer: "This information is important!",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          stopKeydownPropagation: false,
          input: "select",
          inputPlaceholder: "Country",
          inputValue: "",
          inputOptions: {
               Colombia: "Colombia",
               Spain: "Spain",
               UnitedStates: "United States",
               Mexico: "Mexico",
               China: "China",
               Australia: "Australia"
          } 
     })
     if (Country) {
          Swal.fire({
               title: "Hello!",
               showCancelButton: true,
               cancelButtonText: "Cancel",
               showCloseButton: true
          })
     }
})()