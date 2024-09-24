module.exports = {
    texts: {
        featuredItems: "(//h2[@class='title text-center'])[1]",
        getInTouch: "(//h2[@class='title text-center'])[2]",
    },
    buttons: {
        contactUsBtn: "//a[normalize-space()='Contact us']",
        submitFormBtn: "//*[@id='contact-us-form']/div[6]/input",
    },
    fields: {
        nameField: "//input[@placeholder='Name']",
        emailField: "//input[@placeholder='Email']",
        subjectField: "//input[@placeholder='Subject']",
        msgField: "//textarea[@id='message']"
    },
    uploads: {
        contactUsMedia: "//input[@name='upload_file']"
    }
}