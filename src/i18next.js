import i18next from "i18next";

import { initReactI18next } from "react-i18next";

// "Inline" English and Arabic translations.

// We can localize to any language and any number of languages.

const resources = {
  en: {
    translation: {
        nav:{
            departments: "Departments",
            services: "Services",
            myItems: "My Items",
            myAccount:"My Account",
            myCart:"My Cart",
            login: "Login",
            howDo:"How Do You Want your items?",
            search :"Search any item ...."
        },
        mobNav:{
          welcome:"Welocme",
          purchaseHistory: "Purchase History",
          myItems: "My Items",
          account: "Account",
          help: "Help",
          lists: "Lists",
          registries: "Registries",
          departments: "Departments",
          services: "Services",
          giveFeedback: "Give Feedback",
          signout: "Sign Out",
          backToMenu:"Back to Menu"
        },
        departments:{
          groceries:"Groceries",
          beauty: "Beauty",
          kids: "kids",
          fashions: "Fashion",
          electronics: "Electronics",
          home: "Home",
          baby: "Baby",
          Gifts: "Gifts",
          patio: "Patio & Gardens"
        },
        services:{
          health: "Health",
          auto: "Auto",
          protection: "Protection, Home & Tech",
          pay: "EzyBuy Pay",
          customCakes: "Custom Cakes",
          photo: "Photo Services",
          money: "Money Services",
          community: "Community & Giving"
        }
    },
  },

  ar: {
    translation: {
        nav:{
            departments: "الأقسام",
            services: "الخدمات",
            myItems: "مشترياتي",
            myAccount:"حسابي",
            myCart:"سلة الشراء",
            login: "التسجيل",
            howDo:"كيف تريد توصيل مشترياتك ؟",
            search :"ابحث عن أي منتج ..."

        },
        mobNav:{
          welcome:"مرحباَ بك",
          purchaseHistory: "عمليات الشراء",
          myItems: "مشترياتي",
          account: "حسابي",
          help: "المساعدة",
          lists: "قوائمي",
          registries: "التسجيلات",
          departments: "الأقسام",
          services: "الخدمات",
          giveFeedback: "اعطنا تقييماً",
          signout: "تسجيل الخروج",
          backToMenu : "الرجوع إلى القائمة"
        },
        departments:{
          groceries:"البقالة",
          beauty: "الجمال",
          kids: "الأطفال",
          fashions: "الموضة",
          electronics: "الإلكترونيات",
          home: "المنزل",
          baby: "الرضيع",
          Gifts: "هدايا",
          patio: "الحديقة"
        },
        services:{
          health: "الصحة",
          auto: "السيارات",
          protection: "الحماية، المنزل والتكنولوجيا",
          pay: "EzyBuy دفع",
          customCakes: "كيك خصيصاً لك",
          photo: "خدمات الصور",
          money: "الخدمات المالية",
          community: "المجتمع والتبرعات"
        }
    },
  },
};

i18next

  .use(initReactI18next)

  .init({
    resources,

    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
