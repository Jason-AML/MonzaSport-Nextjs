"use client"
import { useTranslation } from 'react-i18next'
const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl">
                flare
              </span>
              <h2 className="text-2xl font-bold tracking-tighter">
                MONZA MOTORS
              </h2>
            </div>
            <p className="text-gray-500 mb-8 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              <a
                className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  public
                </span>
              </a>
              <a
                className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">movie</span>
              </a>
              <a
                className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:text-primary hover:border-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">
                  camera
                </span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">
              {t("footer.inventory.title")}
            </h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.inventory.new_models")}
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.inventory.pre_owned")}
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.inventory.limited")}
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.inventory.track")}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">
              {t("footer.company.title")}
            </h5>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.company.story")}
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.company.motorsports")}
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.company.sustainability")}
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  {t("footer.company.careers")}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h5 className="font-bold uppercase tracking-widest text-sm mb-6">
              {t("footer.newsletter.title")}
            </h5>
            <p className="text-gray-500 text-sm mb-6">
              {t("footer.newsletter.subtitle")}
            </p>
            <form className="flex gap-2">
              <input
                className="grow bg-white/5 border-white/10 rounded-lg text-sm focus:ring-primary focus:border-primary placeholder:text-gray-600"
                placeholder="Your Email"
                type="email"
              />
              <button className="px-6 py-2 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary/90 transition-colors uppercase text-xs">
                {t("footer.newsletter.btn")}
              </button>
            </form>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-widest">
          <p>{t("footer.bottom.rights")}</p>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">
              {t("footer.bottom.privacy")}
            </a>
            <a className="hover:text-white" href="#">
              {t("footer.bottom.terms")}
            </a>
            <a className="hover:text-white" href="#">
              {t("footer.bottom.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
