import PDFMerger from 'pdf-merger-js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const merger = new PDFMerger();

export const mergePdfs = async (p1, p2) => {
  try {
    await merger.add(p1);
    await merger.add(p2);
    const outputPath = path.join(__dirname, 'public/merged.pdf');
    await merger.save(outputPath);
    // Optionally, export the merged PDF as a nodejs Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeFileSync(outputPath, mergedPdfBuffer);
  } catch (error) {
    console.error('Error merging PDFs:', error);
  }
};
