/*
  SAIXORA WEBSITE CONFIGURATION
  Add genuine release files and version numbers before enabling downloads.
*/
window.SAIXORA_CONFIG = {
  companyName: "SAIXORA Technology",
  productName: "SAIXORA Shield",
  tagline: "You Think. I Build.",
  ownerName: "Remon Islam",
  ownerPortfolio: "https://remonislam1927-art.github.io/portfolio-website/",
  supportEmail: "", // Add the official support/contact email before publishing.
  websiteUrl: "", // Add the final production domain, e.g. https://saixora.example
releases: {
    windows: {
        label: "Device Shield for Windows",
        version: "2.0.1",
        fileName: "saixora-device-shield-windows-x64.exe",
        url: "downloads/saixora-device-shield-windows-x64.exe",
        ready: true
    },

    android: {
        label: "Device Shield for Android",
        version: "2.0.0",
        fileName: "saixora-device-shield-android.apk",
        url: "downloads/saixora-device-shield-android.apk",
        ready: true
    },

    staffAndroid: {
        label: "Staff Shield for Android",
        version: "2.0.0",
        fileName: "saixora-staff-shield-android.apk",
        url: "downloads/saixora-staff-shield-android.apk",
        ready: true
    },

    adminAndroid: {
        label: "Admin Shield for Android",
        version: "2.0.0",
        fileName: "saixora-admin-shield-android.apk",
        url: "downloads/saixora-admin-shield-android.apk",
        ready: true
    }
}
};
