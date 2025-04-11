const htmlPdf = require('html-pdf-node');
const fs = require('fs');
const path = require('path');

const convertToPdf = async (inputHtmlPath, outputPdfPath) => {
  try {
    const htmlContent = fs.readFileSync(inputHtmlPath, 'utf8');
    
    let options = { 
      format: 'A4',
      margin: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    };
    
    let file = { content: htmlContent };
    
    const pdfBuffer = await htmlPdf.generatePdf(file, options);
    
    fs.writeFileSync(outputPdfPath, pdfBuffer);
    
    console.log(`PDF generated successfully: ${outputPdfPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

// Convert project planner
convertToPdf(
  path.join(__dirname, 'frontend', 'public', 'resources', 'project-planner.html'),
  path.join(__dirname, 'frontend', 'public', 'resources', 'project-planner.pdf')
);

// Convert budget guide
convertToPdf(
  path.join(__dirname, 'frontend', 'public', 'resources', 'budget-guide.html'),
  path.join(__dirname, 'frontend', 'public', 'resources', 'budget-guide.pdf')
);