// Public transition copy. Legacy account, backend and URL identifiers stay intact.
(() => {
  const copy = {
    en: ['FiestaBug · formerly StepOut', 'Same app, accounts and subscriptions. Our public Android listing may still show StepOut while the renamed release is being prepared.'],
    es: ['FiestaBug · antes StepOut', 'La misma app, cuentas y suscripciones. La ficha pública de Android puede seguir mostrando StepOut mientras preparamos el cambio de nombre.'],
    fr: ['FiestaBug · anciennement StepOut', 'La même application, les mêmes comptes et abonnements. La fiche Android peut encore afficher StepOut pendant la préparation du changement de nom.'],
    de: ['FiestaBug · bisher StepOut', 'Dieselbe App, dieselben Konten und Abonnements. Der öffentliche Android-Eintrag kann während der Umstellung noch StepOut heißen.'],
    it: ['FiestaBug · prima StepOut', 'La stessa app, gli stessi account e abbonamenti. La scheda Android può ancora mostrare StepOut mentre prepariamo il nuovo nome.'],
    pt: ['FiestaBug · antes StepOut', 'O mesmo app, contas e assinaturas. A página pública do Android ainda pode mostrar StepOut enquanto preparamos o novo nome.'],
    ja: ['FiestaBug · 旧名 StepOut', '同じアプリ、アカウント、サブスクリプションです。名称変更の準備中は、Android の公開ストアに StepOut と表示される場合があります。']
  };
  function render() {
    const language = document.documentElement.lang;
    const text = copy[language] || copy.en;
    const notice = document.querySelector('.brand-transition');
    notice.lang = copy[language] ? language : 'en';
    notice.querySelector('strong').textContent = text[0];
    notice.querySelector('span').textContent = text[1];
    // Keep availability truthful in every language until the renamed app is live.
    const release = document.querySelector('.release');
    if (release) release.textContent = text[0];
    const faq = document.querySelector('.questions details:first-of-type p');
    if (faq) faq.textContent = text[1];
    const launch = document.querySelector('#launch > p:nth-of-type(2)');
    if (launch) launch.textContent = text[1];
    const oldFlyers = document.querySelector('#whatsout-marketing');
    if (oldFlyers) oldFlyers.remove();
  }
  render();
  document.querySelector('#language')?.addEventListener('change', render);
  window.addEventListener('languagechange', render);
})();
