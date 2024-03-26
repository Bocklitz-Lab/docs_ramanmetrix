import{_ as r,r as o,o as d,c,a as e,b as t,w as a,F as p,d as l,e as s}from"./app.f0808933.js";var u="/assets/new_button_dygraph_check_all.e98a4262.gif",h="/assets/black_bg_plots.cb8f947a.gif",f="/assets/new_loading_plots.d81c8507.gif",m="/assets/InvertXaxis2.0dcfe574.gif",_="/assets/ManualSliderInput.4a3e5af9.gif",g="/assets/HMOptions.55ab8dc0.jpg",v="/assets/FittedPeaks.0c735ec0.gif",b="/assets/SubtractSpectra.97392bc5.png",w="/assets/QualityTooltips.a48a1f4e.jpg";const y={},x=l('<h1 id="software-releases" tabindex="-1"><a class="header-anchor" href="#software-releases" aria-hidden="true">#</a> Software releases</h1><h2 id="_0-5-x" tabindex="-1"><a class="header-anchor" href="#_0-5-x" aria-hidden="true">#</a> 0.5.x</h2><div class="title_release">Version 0.5.2</div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li>Model persistence issue on test data import</li><li>Loading files with different formats for the same date/device</li><li>Error display during the calibration step</li><li>Error handling for metadata import</li><li>Ability to run long calculations (&gt;12 hours) in the online version</li><li>Open links externally</li></ul></div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li>Use clusters (after running clustering) as class labels via &#39;Customized from metadata&#39; class label &#39;cluster_predictions&#39;</li><li>Combination of EMSC and SNIP for baseline correction</li><li>Provide support for WIP files with the wavelength axis saved as a polynomial</li><li>Import of test metadata separately from test data</li><li>Display cross-validation progress at the model step</li></ul></div><p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li>Add &#39;model_convert&#39; API for converting v05 models into older v04 model versions</li><li>Introduce &#39;session_download&#39; and &#39;session_upload&#39; APIs for exporting/importing sessions at the backend</li><li>Customize &#39;hierarchy_predict_json&#39; API with a filter, e.g., &#39;hierarchy_predict_json/predictions&#39;</li><li>Add &#39;hierarchy_predict_json_predictions&#39; API</li><li>Update &#39;predict_json&#39; API to return top matches</li><li>Add the option to enable \u03C9<sup>4</sup> correction in the parameters file</li><li>Limit the number of rows displayed in regression results</li></ul></div><div class="title_release">Version 0.5.1</div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li>Appearance of test results for a single class in test data</li><li>Fixed appearance of major vote confusion table and parameters in test report when the model is loaded in empty session</li></ul></div><p class="features subsections"> \u{1F389} New Features</p>',13),k={class:"sections"},S=e("li",null,[s("Possibility to refer to all data by setting "),e("code",null,"."),s(" or "),e("code",null,"*"),s(" value in in the "),e("strong",null,"path"),s(" (or "),e("strong",null,"file"),s(") column of the metadata table")],-1),N=s("Possibility to keep the calibration data after calibration in "),F=s("pyRamanmetrix"),P=s(" by setting "),T=e("code",null,"calibrate(..., drop_calib_data=False)",-1),A=s("Import of CSV or TXT files without wavenumber axis (see "),I=s("HT Raman"),V=s(", "),D=s("Data Structure Types"),M=s(", and "),C=s("Metadata Table"),L=s(" for details)"),B=e("li",null,[s("Added automatic date parsing from the filenames in "),e("em",null,"YYYY_MM_DD"),s(" format")],-1),q=l('<p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li>Improved date parsing from the filenames in timestamp format (<em>YYMMDD_hhmmss</em>)</li><li>Customized error messages when inner cross-validation (CV) fails</li><li>Use N-fold CV with N\u226410 instead of 10-fold CV if minimal number of observations per class is less than 10</li><li>Security, performance, and compatibility updates to GUI and installer</li></ul></div><div class="title_release">Version 0.5.0</div><p class="bug subsections">ATTENTION! Model compatibility with previous versions is not supported!</p><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li>Correct plotting of the raw mean spectra with different wavenumber ranges</li><li>Fixed a bug in report printing with unloaded charts</li><li>Fixed broken chart functionality after exporting chart to PNG</li><li>Corrected traces behavior on saving PNG</li><li>Fixed an issue with chart traces standard deviation</li></ul></div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li>Support of SP and FSM files</li><li>Support of TXT/CSV files with coma or semicolon separator</li><li>Import/export of models via pyRamanmetrix</li><li>Possibility to include/exclude spectra at the import step by indicating logical values in the <em>include</em> column of metadata</li><li>Add PCA option for EMSC signal interference</li></ul></div><p class="update subsections"> \u{1F528} Other updates</p>',9),E={class:"sections"},O=e("li",null,"Refactor the software, reducing the size of the setup file and the required disk space for installation by a factor of three",-1),R=e("li",null,"Best number of features is decided at the saturation point of the fitted curve (not by maximal value)",-1),z=e("li",null,"Updated CNN model for feature extraction to a more sophisticated but faster version",-1),X=e("li",null,"Changed the format of PKL files for model import/export",-1),j=s("Website for a license and software downloads has a new domain name - "),H={href:"https://desktop.ramanmetrix.eu/",target:"_blank",rel:"noopener noreferrer"},U=s("desktop.ramanmetrix.eu"),Y=l('<h2 id="_0-4-x" tabindex="-1"><a class="header-anchor" href="#_0-4-x" aria-hidden="true">#</a> 0.4.x</h2><div class="title_release">Version 0.4.3</div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li>Metadata parsing with different data types in the same column</li><li>Correct multiple response selection in test</li></ul></div><div class="title_release">Version 0.4.2</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li>New buttons in plots for mean classes. The button that makes it possible to check/uncheck all traces and the button that checks/unchecks the standard (in the raw data plot) or excluded (in the model step) data.</li></ul><figure align="center"><img style="background:#fff;width:100%;" alt="NewPlotButtons" src="'+u+'"></figure><ul><li>In the dark mode, setting black background is now possible (useful for making screenshots for the black PowerPoint slides)</li></ul><figure align="center"><img style="background:#fff;width:100%;" alt="BlackBG" src="'+h+'"></figure><ul><li><p>Add warnings to calibration step</p></li><li><p>Users can add an &quot;include&quot; column to metadata table to mark the data that has to be included (TRUE) or completely excluded (FALSE) from the whole data processing routine</p></li><li><p>A minimal HTML report with plots is exported along with the ZIP file</p></li><li><p>Speed-up SVM model training</p></li><li><p>Smoothing is added at the calibration step</p></li><li><p>More loading plots are available now for LDA and PLS-based models</p></li></ul><figure align="center"><img style="background:#fff;width:100%;" alt="NewLoadings" src="'+f+'"></figure><ul><li><p>Added R2 and MPE regression metrics</p></li><li><p>Added a table with metrics for all responses for multiple regression</p></li><li><p>Added predict_dict and export functions to pyRamanmetrix</p></li><li><p>Load files with &quot;.0&quot;, &quot;.1&quot;, &quot;.2&quot; extensions the same way as TXT</p></li></ul></div><div class="title_release">Version 0.4.1</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li><p>Introduce interferent signals to EMSC model based preprocessing by labeling those spectra in <code>interferent_sample</code> column of metadata table and specifying their type in <code>type</code> column</p></li><li><p>Inverted X-axis option for all plots</p></li></ul><figure align="center"><img style="background:#fff;width:100%;" alt="InvertXaxis" src="'+m+'"></figure><ul><li>Slider manual input option for all sliders</li></ul><figure align="center"><img style="background:#fff;width:100%;" alt="ManualSliderInput" src="'+_+'"></figure><ul><li>Hard modeling (HM) for feature extraction by fitting selected peaks</li></ul><figure align="center"><img style="background:#fff;width:90%;" alt="HMOptions" src="'+g+'"></figure><ul><li>Interface for setting fitted peaks for hard modeling</li></ul><figure align="center"><img style="background:#fff;width:100%;" alt="FittedPeak" src="'+v+'"></figure><ul><li>Analysis of subtracted spectra (e.g. subtract control sample from treated)</li></ul><figure align="center"><img style="background:#fff;width:70%;" alt="SubtractSpectra" src="'+b+'"></figure></div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li>Step Data, metadata refresh after a new dataset upload</li><li>Quality filters title alignment</li></ul></div><p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li>Plot standard data (&#39;standard&#39;, &#39;standard_intensity&#39;, &#39;reference_sample&#39;, &#39;interferent_sample&#39;, &#39;dark_bg&#39;) in &#39;Mean spectra (raw data)&#39; plot</li><li>Despiking step, new interval for Despiking threshold slider</li><li>Quality plots, tooltips added</li></ul><figure align="center"><img style="background:#fff;width:90%;" alt="QualityTooltips" src="'+w+'"></figure></div><div class="title_release">Version 0.4.0</div><p class="bug subsections">ATTENTION! Model compatibility with previous versions is not supported!</p><p class="features subsections"> \u{1F389} New Features</p>',17),G={class:"sections"},Q=s("Import functions into python 3.10.4 by importing "),W=e("code",null,"server/pyRamanmetrix.py",-1),J=s(" file, e.g. "),K=e("code",null,"import pyRamanmetrix as rm",-1),Z=s(" (see "),$=s("Tools / Python module pyRamanmetrix"),ee=s(")"),se=e("li",null,[e("p",null,"Multi-response PLS regression (PLS2 and PLSW2A) models")],-1),te=s("Support of WITec (*.wip) files with Raman spectra (see "),ie=s("Data Input / Data structure Types"),ae=s(")"),le=e("li",null,[e("p",null,"Difference spectra plot at model step")],-1),oe=e("li",null,[e("p",null,[e("code",null,"Export -> Default parameters"),s(" in high-level expertise mode")])],-1),ne=l('<p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li><p>Appearance of a blank screen at the first start</p></li><li><p>Support <code>\\</code> in file path in metadata table</p></li><li><p>Fix PLS2-DA decision-making for values outside of [0; 1] range</p></li><li><p>Avoid an error if a date cannot be recognized</p></li><li><p>Allow unsorted standard peaks in parameters.txt</p></li><li><p>Preserve zoom on saving figures as PNG</p></li></ul></div><p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li>Inclusion of wavenumber range boundary values</li></ul></div><h2 id="_0-3-x" tabindex="-1"><a class="header-anchor" href="#_0-3-x" aria-hidden="true">#</a> 0.3.x</h2><div class="title_release">Version 0.3.5</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li><p>added PLS2-DA (classification) and PLS1 (regression) models</p></li><li><p>changed design of the license window</p></li></ul></div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li><p>updated labels order in scatterplot legend</p></li><li><p>avoid erasing imported raw data when the import of metadata fails</p></li><li><p>fixed breaking of the layout on window resize</p></li></ul></div><div class="title_release">Version 0.3.4</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li>improved, fixed bugs and changed view for &quot;included labels&quot; feature in the model construction step</li></ul></div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li><p>fixed errors for the sliders on the normalization and quality filters steps, that occurred when the selected calibration degree parameter is a decimal number</p></li><li><p>corrected typos in the tooltip blocks</p></li></ul></div><div class="title_release">Version 0.3.3</div><p class="features subsections"> \u{1F389} New Features</p>',17),re={class:"sections"},de=s("added possibility to use reference spectra for EMSC and quality check (should be marked using 'reference_sample' column in metadata) instead of the mean over the dataset (see "),ce=e("strong",null,"reference_sample",-1),pe=s(" in the "),ue=s("Metadata Table"),he=s(")"),fe=e("li",null,[e("p",null,"added SD to means.csv in results")],-1),me=e("li",null,[e("p",null,"added major vote predictions (if applicable) to results")],-1),_e=l('<p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li><p>fixed bugs related to float values used as labels</p></li><li><p>fixed problem with endless animation on downloads</p></li></ul></div><p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li><p>optimized default parameters</p></li><li><p>added link in the menu to the documentation website</p></li><li><p>displayed errors on upload/download data</p></li><li><p>updated About page: design and list of packages</p></li><li><p>general improvements on stability, updated dependencies</p></li></ul></div><div class="title_release">Version 0.3.2</div><p class="features subsections"> \u{1F389} New Features</p>',6),ge={class:"sections"},ve=e("li",null,[e("p",null,"improvements of data integrity, added md5 sum for models")],-1),be=s("support of JDX and Renishaw TXT files, support of Horiba XY and TXY maps (see "),we=s("Supported Devices"),ye=s(")"),xe=e("li",null,[e("p",null,"display warnings when failed to import files")],-1),ke=l('<p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li><p>bugs fixed for test data report and voting after a quality check</p></li><li><p>fixed appearance of the scatter plot in the test data prediction</p></li></ul></div><p class="subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li><p>added plot with calibration functions to the test report</p></li><li><p>improved scatterplot: one can choose a type of the scatterplot diagonal plot (line, histogram, distribution)</p></li></ul></div><div class="title_release">Version 0.3.1</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li><p>added possibility to stop calculations at any step</p></li><li><p>aggregation of prediction results by voting</p></li><li><p>import metadata tables separately</p></li></ul></div><p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li><p>updated component for displaying backend errors</p></li><li><p>display notification about the new version</p></li><li><p>added voting results to the reports</p></li></ul></div><p>minor bug fixes</p><div class="title_release">Version 0.3.0</div><p class="bug subsections">ATTENTION! This version requires new license file!</p><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li><p>dark mode</p></li><li><p>possibility to link license by HDD instead of MAC-address (no conflict with VPN)</p></li><li><p>usage of all available labels to exclude data from model</p></li></ul></div><p class="bug subsections"> \u{1F41E} Bug Fixes</p><div class="sections"><ul><li>some unexpected installation problems solved</li></ul></div><p class="update subsections"> \u{1F528} Other updates</p><div class="sections"><ul><li>improved quality of the plots saved in PNG format</li></ul></div><h2 id="_0-2-x" tabindex="-1"><a class="header-anchor" href="#_0-2-x" aria-hidden="true">#</a> 0.2.x</h2><div class="title_release">Version 0.2.3</div><p class="subsections"> \u{1F528} Updates </p>',21),Se={class:"sections"},Ne=s("New name and icon, added an average spectra to the model step, updated user interface, improved plots (see "),Fe=s("Interactive plots"),Pe=s("), and fixed bugs."),Te=l('<div class="title_release">Version 0.2.2</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li><p>Added 2-level cross-validation</p></li><li><p>Implemented automated optimization for a number of features</p></li></ul></div><div class="title_release">Version 0.2.1</div><p class="features subsections"> \u{1F389} New Features</p><div class="sections"><ul><li>Add &#39;shift&#39; option on the Standard spectrum plot.</li></ul><p class="subsections">Other updates</p><ul><li>Improved despiking algorithm</li></ul></div><div class="title_release">Version 0.2.0</div><p>...</p>',8);function Ae(Ie,Ve){const i=o("RouterLink"),n=o("ExternalLinkIcon");return d(),c(p,null,[x,e("div",k,[e("ul",null,[S,e("li",null,[N,t(i,{to:"/documentation/Tools.html#python-module-pyramanmetrix"},{default:a(()=>[F]),_:1}),P,T]),e("li",null,[A,t(i,{to:"/documentation/Data.html#ht-raman-ipht-iwan-schie"},{default:a(()=>[I]),_:1}),V,t(i,{to:"/documentation/Data.html#data-structure-types"},{default:a(()=>[D]),_:1}),M,t(i,{to:"/documentation/Data.html#metadata-table"},{default:a(()=>[C]),_:1}),L]),B])]),q,e("div",E,[e("ul",null,[O,R,z,X,e("li",null,[j,e("a",H,[U,t(n)])])])]),Y,e("div",G,[e("ul",null,[e("li",null,[e("p",null,[Q,W,J,K,Z,t(i,{to:"/documentation/Tools.html#python-module-pyramanmetrix"},{default:a(()=>[$]),_:1}),ee])]),se,e("li",null,[e("p",null,[te,t(i,{to:"/documentation/Data.html#data-structure-types"},{default:a(()=>[ie]),_:1}),ae])]),le,oe])]),ne,e("div",re,[e("ul",null,[e("li",null,[e("p",null,[de,ce,pe,t(i,{to:"/documentation/Data.html#metadata-table"},{default:a(()=>[ue]),_:1}),he])]),fe,me])]),_e,e("div",ge,[e("ul",null,[ve,e("li",null,[e("p",null,[be,t(i,{to:"/documentation/Data.html#supported-devices"},{default:a(()=>[we]),_:1}),ye])]),xe])]),ke,e("div",Se,[e("p",null,[Ne,t(i,{to:"/documentation/Tutorial.html#interactive-plots"},{default:a(()=>[Fe]),_:1}),Pe])]),Te],64)}var Me=r(y,[["render",Ae],["__file","Releases.html.vue"]]);export{Me as default};
