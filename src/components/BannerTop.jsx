const BannerTop = () => {
  return (
    <aside className="banner banner-top" role="doc-tip" aria-label="Speak Out">
      <div className="banner__left">
        <span className="banner__hairline">Speak out. Be heard.</span>
        <span className="banner__title">Be counted</span>
      </div>
      <div className="banner__right">
        <p className="banner__text">
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <button className="icon-button" aria-label="close">
        <img src="/assets/img/close.svg" alt="Close" />
      </button>
    </aside>
  )
}

export default BannerTop;
