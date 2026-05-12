const pdfMerger=require('pdf-merger-js');

var merger=new pdfMerger();

(async(p1,p2)=>{
    await merger.add('1.pdf');
    await merger.add('2.pdf');


await merger.save('merged.pdf');
})();