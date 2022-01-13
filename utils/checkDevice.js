
    const detectDevice = () => {
      if (navigator.userAgent.match(/iPhone/i)) {
          return "iphone"
      }
      return "not-iphone"
      // if (navigator.userAgent.match(/iPod/i)) {
      //     console.log("Ipod")
      // }
      // var isAndroid = /(android)/i.test(navigator.userAgent)
      // var isMobile = /(mobile)/i.test(navigator.userAgent)
      // if (isAndroid) {
      //   console.log("Andriod")
      // }
      // if (isMobile) {
      //   console.log("Mobile")
      // }

  }
  export default detectDevice;