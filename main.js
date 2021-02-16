new Vue({
  el: "#app",
  data: {
    errors: [],
    name: "",
    email: "",
    location: "",
    primary: "",
    selectedIndex: null,
    showForm: false,
    contacts: [
      {
        name: "Steve Wozniack",
        email: "woz@apple.com",
        location: "United States",
        primary: "718-886-5540",
      },
      {
        name: "Linus Torvalds",
        email: "linus@linux.com",
        location: "Finland",
        primary: "+358 9 568 042",
      },
      {
        name: "Bill Gates",
        email: "bill@microsoft.com",
        location: "United States",
        primary: "4841698514",
      },
      {
        name: "Richard Stallman",
        email: "richard@fsf.org",
        location: "United States",
        primary: "664 613 7896",
      },
      {
        name: "Ada Lovelace",
        email: "ada@lovelace.co.uk",
        location: "United Kingdom",
        primary: "02394 786236",
      },
      {
        name: "Alan Turing",
        email: "alan@turingtest.org.uk",
        location: "United Kingdom",
        primary: "+44796 37829368",
      },
      {
        name: "Charles Babbage",
        email: "charles@diffengine.com",
        location: "United Kingdom",
        primary: "+442392343478",
      },
      {
        name: "Dennis Ritchie",
        email: "dennis@cprogramming.com",
        location: "United States",
        primary: "012-589-1651",
      },
      {
        name: "Ken Thompson",
        email: "ken@unix.net",
        location: "United States",
        primary: "6434030340",
      },
      {
        name: "Steve Jobs",
        email: "steve@apple.com",
        location: "United States",
        primary: "805-110-9825",
      },
    ],
  },
  methods: {
    checkForm(e) {
      if (this.name && this.email && this.location && this.primary) {
        this.contacts.unshift({
          editable: false,
          name: this.name,
          email: this.email,
          location: this.location,
          primary: this.primary,
        });
        this.name = "";
        this.email = "";
        this.location = "";
        this.primary = "";
        this.errors = [];
        e.preventDefault();
      } else {
        this.errors = [];
        console.log(this.errors);
        if (!this.name) {
          this.errors.push("Name required.");
        }
        if (!this.email) {
          this.errors.push("Email required.");
        }
        if (!this.location) {
          this.errors.push("Location required.");
        }
        if (!this.primary) {
          this.errors.push("Primary required");
        }
        e.preventDefault();
      }
    },
    check() {
      this.contacts.forEach((o, i) => {
        this.$set(this.contacts[i], "editable", false);
      });
    },
    cancelUpdate(contact) {
      contact.editable = false;
    },
    editContact(index, contact) {
      contact.editable = true;
      this.selectedIndex = index;
    },
    updateContact(contact) {
      if (event.target.name.value !== "") {
        contact.name = event.target.name.value;
      } else if (event.target.location.value !== "") {
        contact.location = event.target.location.value;
      } else if (event.target.email.value !== "") {
        contact.email = event.target.email.value;
      } else if (event.target.primary.value !== "") {
        contact.primary = event.target.primary.value;
      }

      contact.editable = false;
      event.preventDefault();
    },
    deleteContact(index) {
      this.contacts.splice(index, 1);
    },
  },
  beforeMount() {
    this.check();
  },
});
