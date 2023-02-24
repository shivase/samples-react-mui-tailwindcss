import img1 from '../../assets/img/img1.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/img3.jpg';
import img4 from '../../assets/img/img4.jpg';

export const Columns = () => {
  return (
    <>
      {/* Columns */}
      <div className="columns-4 gap-2">
        <img className="w-full" src={img1} alt="img1" />
        <img className="w-full" src={img2} alt="img2" />
        <img className="w-full" src={img3} alt="img3" />
        <img className="w-full" src={img4} alt="img4" />
      </div>

      <div className="columns-xs">
        <img className="w-full" src={img1} alt="img1" />
        <img className="w-full" src={img2} alt="img2" />
        <img className="w-full" src={img3} alt="img3" />
        <img className="w-full" src={img4} alt="img4" />
      </div>

      {/* Aspect Ratio */}
      <div className="columns-4">
        <img className="aspect-video w-full" src={img1} alt="img1" />
        <img className="aspect-square w-full" src={img2} alt="img2" />
        <img className="w-full " src={img3} alt="img3" />
        <img className="w-full" src={img4} alt="img4" />
      </div>
    </>
  );
};

//{/* Column Classes
//columns-1	      columns: 1;
//columns-2	      columns: 2;
//columns-3	      columns: 3;
//columns-4	      columns: 4;
//columns-5	      columns: 5;
//columns-6	      columns: 6;
//columns-7	      columns: 7;
//columns-8	      columns: 8;
//columns-9	      columns: 9;
//columns-10	    columns: 10;
//columns-11	    columns: 11;
//columns-12	    columns: 12;
//columns-auto	  columns: auto;
//columns-3xs	    columns: 16rem; /* 256px */
//columns-2xs	    columns: 18rem; /* 288px */
//columns-xs	    columns: 20rem; /* 320px */
//columns-sm	    columns: 24rem; /* 384px */
//columns-md	    columns: 28rem; /* 448px */
//columns-lg	    columns: 32rem; /* 512px */
//columns-xl	    columns: 36rem; /* 576px */
//columns-2xl	    columns: 42rem; /* 672px */
//columns-3xl	    columns: 48rem; /* 768px */
//columns-4xl	    columns: 56rem; /* 896px */
//columns-5xl	    columns: 64rem; /* 1024px */
//columns-6xl	    columns: 72rem; /* 1152px */
//columns-7xl	    columns: 80rem; /* 1280px */
//-->
//
//{/* Break After
//  break-after-auto	break-after: auto;
//  break-after-avoid	break-after: avoid;
//  break-after-all	break-after: all;
//  break-after-avoid-page	break-after: avoid-page;
//  break-after-page	break-after: page;
//  break-after-left	break-after: left;
//  break-after-right	break-after: right;
//  break-after-column	break-after: column;
//-->
//
//{/* Break Before
//  reak-before-auto	break-before: auto;
//  break-before-avoid	break-before: avoid;
//  break-before-all	break-before: all;
//  break-before-avoid-page	break-before: avoid-page;
//  break-before-page	break-before: page;
//  break-before-left	break-before: left;
//  break-before-right	break-before: right;
//  break-before-column	break-before: column;
//-->
//
