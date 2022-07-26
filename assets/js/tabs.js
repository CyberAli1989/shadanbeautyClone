$(function () {
  $('#smarttab , #smarttab1 , #smarttab2 , #smarttab3').smartTab({
    selected: 0, // Initial selected tab, 0 = first tab
    theme: 'basic', // theme, related css need to include for other than default theme
    justified: true, // Nav menu justification. true/false
    autoAdjustHeight: true, // Automatically adjust content height
    backButtonSupport: true, // Enable the back button support
    enableUrlHash: true, // Enable selection of the step based on url hash
    transition: {
      animation: 'slideVertical', // Animation effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
      speed: '400', // Animation speed. Not used if animation is 'css'
      easing: '', // Animation easing. Not supported without a jQuery easing plugin. Not used if animation is 'css'
      prefixCss: '', // Only used if animation is 'css'. Animation CSS prefix
      fwdShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on forward direction
      fwdHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on forward direction
      bckShowCss: '', // Only used if animation is 'css'. Step show Animation CSS on backward direction
      bckHideCss: '', // Only used if animation is 'css'. Step hide Animation CSS on backward direction
    },
    autoProgress: { // Auto navigate tabs on interval
      enabled: false, // Enable/Disable Auto navigation
      interval: 3500, // Auto navigate Interval (used only if "autoProgress" is enabled)
      stopOnFocus: true, // Stop auto navigation on focus and resume on outfocus
    },
    keyboard: {
      keyNavigation: false, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
      keyLeft: [37, 38], // Left key code
      keyRight: [39, 40], // Right key code
      keyHome: [36], // Home key code
      keyEnd: [35] // End key code
    },
    style: { // CSS Class settings
      mainCss: 'st',
      navCss: 'nav',
      navLinkCss: 'nav-link',
      contentCss: 'tab-content',
      contentPanelCss: 'tab-pane',
      themePrefixCss: 'st-theme-',
      justifiedCss: 'st-justified',
      anchorDefaultCss: 'default',
      anchorActiveCss: 'active',
      loaderCss: 'st-loading'
    },
    getContent: null
  });
  $('#easy-filter-wrap button').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active')
  })
  $('#easy-filter-wrap').easyFilter({
    firstFilter: '*',
    animation: 'slide',
    duration: 400
  });
})