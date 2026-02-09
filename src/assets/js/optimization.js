// Advanced Loading and Optimization Script
(function () {
  "use strict";

  // Loading manager
  class LoadingManager {
    constructor() {
      this.loadedResources = 0;
      this.totalResources = 0;
      this.loadingSteps = [
        "Initializing...",
        "Loading fonts...",
        "Loading styles...",
        "Loading images...",
        "Preparing interface...",
        "Almost ready...",
        "Ready!",
      ];
      this.currentStep = 0;
      this.init();
    }

    init() {
      this.updateProgress(0);
      this.startLoading();
    }

    updateProgress(percent) {
      const progressFill = document.getElementById("progress-fill");
      const progressPercent = document.getElementById("progress-percent");
      const loadingStatus = document.getElementById("loading-status");

      if (progressFill) progressFill.style.width = percent + "%";
      if (progressPercent)
        progressPercent.textContent = Math.round(percent) + "%";

      // Update loading step based on progress
      const stepIndex = Math.min(
        Math.floor((percent / 100) * this.loadingSteps.length),
        this.loadingSteps.length - 1
      );

      if (loadingStatus && this.loadingSteps[stepIndex]) {
        loadingStatus.textContent = this.loadingSteps[stepIndex];
      }
    }

    startLoading() {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random increment between 5-20

        if (progress >= 100) {
          progress = 100;
          this.updateProgress(progress);
          setTimeout(() => {
            this.hideLoader();
          }, 500);
          clearInterval(interval);
        } else {
          this.updateProgress(progress);
        }
      }, 200);

      // Check for actual resource loading
      this.checkResourcesLoaded();
    }

    checkResourcesLoaded() {
      const checkResources = () => {
        let fontsLoaded = false;
        let stylesLoaded = false;
        let angularLoaded = false;

        // Check fonts
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            fontsLoaded = true;
            document.body.classList.add("fonts-loaded");
            this.checkAllLoaded();
          });
        } else {
          setTimeout(() => {
            fontsLoaded = true;
            document.body.classList.add("fonts-loaded");
          }, 2000);
        }

        // Check stylesheets
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        let loadedStylesheets = 0;

        stylesheets.forEach((link) => {
          if (link.sheet) {
            loadedStylesheets++;
          } else {
            link.addEventListener("load", () => {
              loadedStylesheets++;
              if (loadedStylesheets === stylesheets.length) {
                stylesLoaded = true;
                this.checkAllLoaded();
              }
            });
          }
        });

        if (loadedStylesheets === stylesheets.length) {
          stylesLoaded = true;
        }

        // Check if Angular is loaded
        const checkAngular = () => {
          if (
            window.ng ||
            document.querySelector("app-root").children.length > 0
          ) {
            angularLoaded = true;
            this.checkAllLoaded();
          } else {
            setTimeout(checkAngular, 100);
          }
        };

        setTimeout(checkAngular, 1000);

        this.checkAllLoaded = () => {
          if (fontsLoaded && stylesLoaded && angularLoaded) {
            setTimeout(() => this.hideLoader(), 500);
          }
        };
      };

      // Start checking after a short delay
      setTimeout(checkResources, 100);
    }

    hideLoader() {
      const loader = document.getElementById("global-loader");
      if (loader) {
        loader.classList.add("loaded");

        // Remove from DOM after animation
        setTimeout(() => {
          if (loader.parentNode) {
            loader.parentNode.removeChild(loader);
          }
        }, 1000);
      }
    }
  }

  // Initialize loading manager when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new LoadingManager();
    });
  } else {
    new LoadingManager();
  }

  // Preload critical images
  const criticalImages = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/ra7ala.png",
  ];

  criticalImages.forEach(function (src) {
    const img = new Image();
    img.src = src;
  });

  // Performance optimization
  const optimizePerformance = () => {
    // Lazy load images
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
          }
        });
      });

      // Apply to images with data-src attribute
      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.1s"
      );
    }
  };

  // Run optimizations after page load
  window.addEventListener("load", optimizePerformance);
})();
