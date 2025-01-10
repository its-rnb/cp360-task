import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      clients: "Clients",
      totalClients: "Total Clients",
      totalInvoices: "Total Invoices",
      totalRevenue: "Total Revenue",
      unpaid: "Unpaid",
      overdue: "Overdue",
      geography: "Clients Geography",
      addClient: "Add Client",
      clientName: "Client Name",
      status: "Status",
      balance: "Balance",
      invoiceStatus: "Invoice Status",
      name: "Name",
      clientStatus: "Client Status",
      outBal: "Outstanding Balance"
    },
  },
  fr: {
    translation: {
      dashboard: "Tableau de Bord",
      clients: "Clients",
      totalClients: "Total des Clients",
      totalInvoices: "Total des Factures",
      totalRevenue: "Revenu Total",
      unpaid: "Impayé",
      overdue: "En Retard",
      geography: "Géographie des Clients",
      addClient: "Ajouter un Client",
      clientName: "Nom du Client",
      status: "Statut",
      balance: "Solde",
      invoiceStatus: "Statut de Facture",
      name: "Nom",
      clientStatus: "Statut du Client",
      outBal: "Équilibre Exceptionnel"
    },
  },
};


  i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;