import email from "../icons/email.svg";
import location from "../icons/location.svg";
import phone from "../icons/phone.svg";

const contactSection = document.createElement("section");
contactSection.classList.add("contact");

const contactHeading = document.createElement("h1");
contactHeading.classList.add("contact__heading");
contactHeading.textContent = "Contact Us";

const contactPara = document.createElement("p");
contactPara.classList.add("contact__para");
contactPara.textContent = `Visit us, call us, or make a reservation to experience authentic
          Italian cuisine.`;

const contactDetails = document.createElement("div");
contactDetails.classList.add("contact__details");

class ContactDetailsInfo {
  contactDetailsInfo = document.createElement("div");
  contactDetailsTitle = document.createElement("h3");
  img = document.createElement("img");
  contactDetailsDesc = document.createElement("p");

  constructor(img, title, desc) {
    this.img.src = img;
    this.img.classList.add("svg");
    this.contactDetailsTitle.textContent = title;
    this.contactDetailsDesc.textContent = desc;
    this.appendInfo();
    this.addClasses();
  }

  appendToContainer() {
    contactDetails.appendChild(this.contactDetailsInfo);
  }

  appendInfo() {
    this.contactDetailsInfo.append(
      this.contactDetailsTitle,
      this.contactDetailsDesc
    );
    this.contactDetailsTitle.prepend(this.img);
  }

  addClasses() {
    this.contactDetailsInfo.classList.add("contact__details_info");
    this.contactDetailsTitle.classList.add("contact__details_title");
    this.contactDetailsDesc.classList.add("contact__details_desc");
  }
}

const contactDetailLocationTitle = "Location";
const contactDetailLocationDesc = "123 Little Italy Street New York, NY 10013";
new ContactDetailsInfo(
  location,
  contactDetailLocationTitle,
  contactDetailLocationDesc
).appendToContainer();

const contactDetailPhoneTitle = "Phone";
const contactDetailPhoneDesc = "(555) 123-4567";
new ContactDetailsInfo(
  phone,
  contactDetailPhoneTitle,
  contactDetailPhoneDesc
).appendToContainer();

const contactDetailEmailTitle = "Email";
const contactDetailEmailDesc = "hells@kitchen.com";
new ContactDetailsInfo(
  email,
  contactDetailEmailTitle,
  contactDetailEmailDesc
).appendToContainer();

contactSection.append(contactHeading, contactPara, contactDetails);

export { contactSection as Contact };
