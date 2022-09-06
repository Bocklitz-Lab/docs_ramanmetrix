import{_ as l,r as o,o as d,c as p,a as e,b as n,w as i,F as c,d as s,e as a}from"./app.55a943ae.js";var u="/assets/flowCLI.f1fa668c.png";const m={},h=s(`<h1 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h1><h2 id="command-line-interface-cli" tabindex="-1"><a class="header-anchor" href="#command-line-interface-cli" aria-hidden="true">#</a> Command line interface (CLI)</h2><p>Access to RAMANMETRIX CLI tools is possible per request.</p><h3 id="compile-from-source-code" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code" aria-hidden="true">#</a> Compile from source code</h3><p><strong>RAMAN</strong>METRIX CLI comes with two options that can be used, a <strong>flow based</strong>(ramanmetrixCLI.py) version for a guided user experience, or a <strong>argument based</strong>(ramanmetrixArgCLI.py) verison for a more minimal use case or to be used programatically.</p><p><strong>Opition 1:</strong></p><ol><li><p>Clone the repository to a local directory.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    git clone https://git.photonicdata.science/ramanmetrix-project/ramanmetrix-arg-cli.git 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Create and activate your virtual environment.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    virtualenv your-env-name-here

    your-env-name-here\\Scripts\\activate
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>Run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    pip install -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>If the ramanmetrix_backend.exe is not installed in a default location, please take note of the installation pathway to lauch it manually through the CLI prompts. If you are unable to find it, the ramanmetrixArgCLI comes with a search command named exeFinder that can be run to find it.</p></li><li><p>Run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    python ramanmetrixCLI.py
            or
    python ramanmetrixArgCLI.py
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><p><strong>Option 2:</strong></p><ol><li>git clone the repository to a local directory (*see optition 1)</li><li>Create and activate your virtual environment (*see optition 1)</li><li>If ramanmetrix_backend.exe is not installed in default location, please take note of installation pathway to lauch it manually through the CLI prompts.</li><li>Run: python setup.py and build the package to a local directory. The program can then be called globally with the following namespace.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    python setup.py

    ramanmetrixCLI or ramanmetrixArgCLI
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="ramanmetrix-argument-cli" tabindex="-1"><a class="header-anchor" href="#ramanmetrix-argument-cli" aria-hidden="true">#</a> RAMANMETRIX Argument CLI</h4><ol><li><p>The user must choose whether to use the offline or online client. If the user would like to use the online client they must call the login command before any other chained commands. The user must provide their username as argument using --username or -u. Example of login call is seen below:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code># connection to online client

ramanmetrixArgCLI login -u Demouser
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>The user can then choose between 4 different analysis pathway commands:</p><ol><li><strong>Train models</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--params/--noparams (-p/-np): to be set if user wants to upload parameter file.</li><li>--export/--noexport (-x/-nx): to be set if user wants to export model file.</li></ol></li><li><strong>Preprocess</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--export/--noexport (-x/-nx): to be set if user wants to export model file.</li></ol></li><li><strong>Predict</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--export/--noexport (-x/-nx): to be set if user wants to export model file.</li></ol></li><li><strong>apiCall</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--apicall (-a): argument keyword of apicall to make. These pathways are called by keyword and if the online client is chosen by chaining the command after the login command. Every command asks for boolean flags with the most important being --online/--offline(-on/-off) indicating which client to use.</li></ol></li></ol></li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>#example train model call for online clients

ramanmetrixArgCLI login -u Demouser trainmodel -on -p -x 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="ramanmetrix-flow-cli" tabindex="-1"><a class="header-anchor" href="#ramanmetrix-flow-cli" aria-hidden="true">#</a> RAMANMETRIX Flow CLI</h4><p>The flow based CLI guides the user through a series of prompts that makes similar calls that the argument CLI does but is more user friendly. The user will first be asked if they would like to use the online or offline client. After which the same 4 analysis pathways may be selected for further analysis. After the analysis pathway is finished, the user is asked if they would like to restart the analysis and process more data. An example of the Flow CLI is depicted below:</p><p><img src="`+u+'" alt="Image from alias"></p><h2 id="metadata-loader" tabindex="-1"><a class="header-anchor" href="#metadata-loader" aria-hidden="true">#</a> Metadata loader</h2><p>Packaged version of metadata loader is provided together with the desktop version distribution at <code>RAMANMETRIX Setup 0.4.x.zip\\Tools\\metadata-loader\\metaloader.exe</code>.</p><p>Access to the source code is possible per request.</p><h3 id="download-and-run-metaloader" tabindex="-1"><a class="header-anchor" href="#download-and-run-metaloader" aria-hidden="true">#</a> Download and run Metaloader</h3>',21),b=a("The metaloader app allows the user to automatically load folder/file structures into a data table for creating the necessary metadata table needed for use with the "),g=e("strong",null,"RAMAN",-1),f=a("METRIX client. The program can be run locally or built to a specific operating system as an executbale using rust cargo crate manager. For convience purposes, the most recent pre-built versions for x86_64_windows and linux versions are available for download from the releases section of the gitlab repository "),_={href:"https://git.photonicdata.science/Timothy.holbrook/ramanmetrix-metaloader/-/releases",target:"_blank",rel:"noopener noreferrer"},y=a("Metaloader releases"),v=a("."),x=s(`<h3 id="compile-from-source-code-1" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code-1" aria-hidden="true">#</a> Compile from source code</h3><p>If the operating system of the user is not prebuilt, the user can easily build the application locally using the following instructions:</p><p><strong>Build locally using rust:</strong></p><ol><li><p>Clone the repository to a local directory</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>git clone https://git.photonicdata.science/Timothy.holbrook/ramanmetrix-metaloader.git
cd ramanmetrix-metaloader
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Install rust</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>curl --proto &#39;=https&#39; --tlsv1.2 -sSf https://sh.rustup.rs | sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>Rust trys to configure the PATH automatically during installation, however if it is not this must be added to enviroment variable path manually. The user can test if <strong>rust</strong> has been added to the PATH via:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rustc --version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>The binary can then be built using the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cargo build --release
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>The OS specifc binary will then be present and ready for use in the <strong>./your-metaloader-dir/target/release</strong></p></li></ol><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3>`,5),A=e("li",null,"Place the binary file where you would like the resulting metatables to be exported, then run the binary via the filebrowser or command line. This will then prompt the user to select the top directory where the metadata folder structure is located and a directory for exporting the resulting metatables. After completion the program will export two versions of the metatable one for folder only structure and one for file-based batch structure.",-1),w=a("The user can learn more about the correct folder structure to use in the following documentation section "),q={href:"https://git.photonicdata.science/Timothy.holbrook/ramanmetrix-metaloader.git",target:"_blank",rel:"noopener noreferrer"},I=a("defined from folder structure"),k=s('<h2 id="python-module-pyramanmetrix" tabindex="-1"><a class="header-anchor" href="#python-module-pyramanmetrix" aria-hidden="true">#</a> Python module pyRamanmetrix</h2><p>The module is accessible in the licensed desktop <strong>RAMAN</strong>METRIX. See details below.</p><h3 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h3><p>Starting from <strong>RAMAN</strong>METRIX <strong>0.4.0</strong>, scripts used for data loading, preprocessing, training, and prediction can be loaded as a python module. The following requirements need to be fulfilled:</p>',4),T=e("strong",null,"RAMAN",-1),R=a("METRIX needs to be "),P=a("installed and licensed"),M=a(" on the local computer."),C=e("li",null,[e("p",null,[a("The exact compatible version of Python need to be used. The required Python version can be verified using "),e("code",null,"Help -> About"),a(" in the top menu bar of "),e("strong",null,"RAMAN"),a("METRIX GUI. Python 3.10.4 is compatible with "),e("strong",null,"RAMAN"),a("METRIX 0.4.0 released in August 2022.")])],-1),L=s(`<h3 id="importing-pyramanmetrix" tabindex="-1"><a class="header-anchor" href="#importing-pyramanmetrix" aria-hidden="true">#</a> Importing pyRamanmetrix</h3><p>Add path to the <code>RAMANMETRIX/server</code> folder of installed <strong>RAMAN</strong>METRIX to the environmental variable <code>PATH</code>. For example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import sys
sys.path.insert(0, r&quot;C:\\Program Files\\RAMANMETRIX\\server&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The default location for a system-wide installation is <code>C:\\Program Files\\RAMANMETRIX\\server</code> and the location for a per-user installation is <code>%LOCALAPPDATA%\\Programs\\RAMANMETRIX\\server</code>.</p><p>If an older version of <strong>RAMAN</strong>METRIX was previously installed, then the installation could be in a folder named <code>ramanmetrix_desktop</code> instead of <code>RAMANMETRIX</code>.</p><p>Alternatively, to search among all possible default locations of the installation, the following code can be used.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import sys
import os
for dirname in [&quot;RAMANMETRIX&quot;, &quot;ramanmetrix_desktop&quot;]:
    for root in [&quot;C:/Program Files&quot;, os.getenv(&quot;LOCALAPPDATA&quot;) + &quot;/Programs&quot;]:
        p = os.path.normpath(os.path.join(root, dirname, &quot;server&quot;))
        if os.path.exists(p):
            print(f&quot;Adding to %PATH%: {p}&quot;)
            sys.path.insert(0, p)
        else:
            print(f&quot;Folder not found: {p}&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Import scripts as package</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import pyRamanmetrix
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="preprocess-data-train-and-test-models" tabindex="-1"><a class="header-anchor" href="#preprocess-data-train-and-test-models" aria-hidden="true">#</a> Preprocess data, train and test models</h3><p>Import desired modules:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>from pyRamanmetrix import SpData, preprocess, train, predict
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Load training data and parse the metadata:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>data = SpData()
data.load(&quot;ascitic-fluid_bacteria_gram-negative(with_metadata).zip&quot;)
data.extract_metadata()[&#39;Metadata tables&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Set parameters:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>data.parameters[&#39;despike_type&#39;] = &#39;default&#39;
data.parameters[&#39;model_validation&#39;] = &#39;batch&#39;
data.parameters[&#39;model_type&#39;] = &#39;pcalda&#39;
data.parameters[&#39;model_ncomp_auto&#39;] = True
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Preprocess data:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>data = preprocess.despike(data)
data = preprocess.calibrate(data, update_reference=True)
data = data.get_corr(&quot;corr_calib&quot;)
data = data.aggregate_by(data.parameters[&quot;calib_aggr_by&quot;])
data = preprocess.background(data, update_reference=True)
data = data.aggregate_by(data.parameters[&quot;baseline_aggr_by&quot;])
data = preprocess.normalize(data, update_reference=True)
data = data.get_corr(&quot;corr_prpr&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Quality check and training:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>data = preprocess.quality(data)
data = train(data)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Load, preprocess, and predict test data:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>data_test = SpData()
data_test.load(&quot;ascitic-fluid_bacteria_minimal_test.zip&quot;)
data_test.extract_metadata()[&#39;Metadata tables&#39;]

data_test.models = data.models
data_test.parameters = data.parameters
if data_test.parameters[&quot;model_classes_name&quot;] in data_test.metadata.columns:
    data_test.metadata.type = data_test.metadata[data_test.parameters[&quot;model_classes_name&quot;]]

data_test = preprocess.despike(data_test)
data_test = preprocess.calibrate(data_test)
data_test = data_test.get_corr(&quot;corr_calib&quot;)
data_test = data_test.aggregate_by(data_test.parameters[&quot;calib_aggr_by&quot;])
data_test = preprocess.background(data_test)
data_test = data_test.aggregate_by(data_test.parameters[&quot;baseline_aggr_by&quot;])
data_test = preprocess.normalize(data_test)
data_test = data_test.get_corr(&quot;corr_prpr&quot;)
data_test = preprocess.quality(data_test)
data_test = predict(data_test)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>The resulting object contains prediction results as a &#39;dict&#39; under &quot;results&quot; attribute. To see the available dict fields use the following line:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>print(data_test.results.keys())
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="backend-apis" tabindex="-1"><a class="header-anchor" href="#backend-apis" aria-hidden="true">#</a> Backend APIs</h2>`,25),N=a("Backend of "),E=e("strong",null,"RAMAN",-1),X=a("METRIX can be accessed via HTTPS requests from any other software. To use the backend APIs, "),S=a("install and license"),O=e("strong",null,"RAMAN",-1),D=a("METRIX on your local computer."),F=s(`<h3 id="access-backend-apis" tabindex="-1"><a class="header-anchor" href="#access-backend-apis" aria-hidden="true">#</a> Access backend APIs</h3><p><strong>Option 1: running software</strong></p><ol><li>Start <strong>RAMAN</strong>METRIX normally.</li><li>Access backend APIs through <code>http://localhost:5001/api/%API_name%</code>.</li></ol><p><strong>Option 2: start backend using file explorer</strong></p><ol><li>Using file explorer go to the folder where the <code>ramanmetrix_backend.exe</code> is located, e.g.: <code>%LocalAppData%\\Programs\\RAMANMETRIX\\server</code>.</li><li>Double click on <code>ramanmetrix_backend.exe</code>.</li><li>Access backend APIs through <code>http://localhost:5000/api/%API_name%</code>.</li></ol><p><strong>Option 3: start backend from command line</strong></p><ol><li>Press <em>Win+R</em> , type <code>cmd</code> and press <em>Enter</em> to open command prompt.</li><li>Change directory to the <code>server</code> folder of the installed software using <code>cd</code> command, e.g.:<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cd &quot;%LocalAppData%\\Programs\\RAMANMETRIX\\server&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>Start backend on the specified (e.g. 8000) port<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ramanmetrix_backend 8000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li>Access backend APIs on the specified port through <code>http://localhost:8000/api/%API_name%</code>.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Please keep in mind that a correct port has to be used:</p><ul><li>For backend running solely: 5000 or custom specified</li><li>For software running with GUI: 5001 (or 5002, 5003, \u2026 for multiple windows running)</li></ul></div><h3 id="available-apis" tabindex="-1"><a class="header-anchor" href="#available-apis" aria-hidden="true">#</a> Available APIs</h3><ul><li><p><code>/api/defaults</code> - accepts parameters in JSON format passed as POST request. <strong>Need to be run to initialize the session!</strong> <em>Python</em> example:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import requests
response = requests.post(url=&quot;http://localhost:5000/api/defaults&quot;,
    cookies={&quot;session_ramanmetrix_5000&quot;: &quot;session_001&quot;},
    json={&#39;baseline_type&#39;: &#39;snip&#39;, &#39;baseline_iterations&#39;: 40})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p><code>/api/model_upload</code> - accepts POST requests with a single <strong>model file</strong> (<em>*.pkl</em>) passed as <em>file</em> variable.</p></li><li><p><code>/api/upload_test</code> - accepts POST requests with a single <strong>file with spectra</strong> (<em>*.zip</em>) passed as <em>file</em> variable.</p></li><li><p><code>/api/despike_data</code>, <code>/api/calibrate_data</code>, <code>/api/bg_correct_data</code>, <code>/api/normalize_data</code>, <code>/api/train_model</code> - APIs for <strong>training</strong> data pretreatment, preprocessing, and model construction.</p></li><li><p><code>/api/get_mean_raw_test</code>, <code>/api/test_prpr</code>, <code>/api/test_model</code> - APIs for <strong>test</strong> data pretreatment, preprocessing, and model testing.</p></li><li><p><code>/api/predict_json</code> - The API that is most suitable for on-a-fly predictions. Runs preprocessing and pretreatment of the spectra passed in the request. Accepts JSON request with the following fields: <em>x</em>(list of wavenumber values), <em>y</em>(list of lists with intensity values), <em>standard</em> (optional, list or list of lists with standard spectra), <em>standard_intensity</em> (optional, list of lists with standard intensity spectra), <em>dark_bg</em> (optional, list of lists with measured dark background).</p></li></ul><h3 id="on-a-fly-predictions" tabindex="-1"><a class="header-anchor" href="#on-a-fly-predictions" aria-hidden="true">#</a> On-a-fly predictions</h3><p>First, start <strong>RAMAN</strong>METRIX backend as described in <a href="#access-backend-apis">Access backend APIs</a>.</p><p>Initialize the session.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import requests
port = 5000                             # port where backend is running (use port 5001 for the version with GUI)
session_id = &#39;unique_session_ID&#39;        # unique session ID (e.g. generated by os.urandom(8).hex())
API = &quot;http://localhost:&quot; + str(port) + &quot;/api/&quot;
cookies = {&quot;session_ramanmetrix_&quot; + str(port): session_id}

# get (initialize) default parameters
response = requests.post(url=API + &quot;defaults&quot;, cookies=cookies)
response.json()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Import model from file</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>file_model = &quot;Examples/Predict test data/model_LDA_species.pkl&quot;
response = requests.post(url=API + &quot;model_upload&quot;, cookies=cookies,
                         files={&quot;file&quot;: open(file_model, &#39;rb&#39;)})
response.json()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Load spectra as <em>dict</em> (compatible with JSON)</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>import json
data = json.load(open(&#39;Backend APIs/data.json&#39;, &#39;r&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Send, process and predict data loaded as JSON POST request (single API)</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>response = requests.post(url=API + &quot;predict_json&quot;, cookies=cookies, json=data)
response.json()
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="other-examples" tabindex="-1"><a class="header-anchor" href="#other-examples" aria-hidden="true">#</a> Other examples</h3><p>A few minimal examples are provided together with the desktop version distribution at <code>RAMANMETRIX Setup 0.4.x.zip\\Backend APIs</code>:</p><ul><li><code>minimal_test.html</code> - An example of an <em>HTML</em> form which can be used to submit model and sata and obtain the results.</li><li><code>minimal_training.py</code> - an examples of training the model via API using <em>Python</em>.</li><li><code>minimal_test.py</code> - an examples of applying the model via API using <em>Python</em>.</li><li><code>minimal_hierarchy_test.py.ipynb</code> - a minimal example of applying models sequentially.</li></ul>`,23);function j(z,B){const t=o("ExternalLinkIcon"),r=o("RouterLink");return d(),p(c,null,[h,e("p",null,[b,g,f,e("a",_,[y,n(t)]),v]),x,e("ol",null,[A,e("li",null,[w,e("a",q,[I,n(t)])])]),k,e("ul",null,[e("li",null,[e("p",null,[T,R,n(r,{to:"/documentation/Desktop.html"},{default:i(()=>[P]),_:1}),M])]),C]),L,e("p",null,[N,E,X,n(r,{to:"/documentation/Desktop.html"},{default:i(()=>[S]),_:1}),O,D]),F],64)}var U=l(m,[["render",j],["__file","Tools.html.vue"]]);export{U as default};
