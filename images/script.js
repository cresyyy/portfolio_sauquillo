document.addEventListener("DOMContentLoaded", function() {
    const viewPortfolioButton = document.querySelector('.bt1');
    viewPortfolioButton.addEventListener('click', function() {
      const pdfUrl = document.getElementById('portfolio').getAttribute('href');
      downloadPDF(pdfUrl);
    });
    
    function downloadPDF(pdfUrl) {
      const a = document.createElement('a');
      a.href = pdfUrl;
      a.download = 'portfolio.pdf'; 
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  });