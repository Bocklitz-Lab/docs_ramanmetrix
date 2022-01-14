import{r as t,o as r,c as l,a as e,b as s,F as i,d as o,e as a}from"./app.e71f8c63.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var d="/assets/flowCLI.f1fa668c.png";const p={},h=o(`<h1 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h1><h2 id="command-line-interface-cli" tabindex="-1"><a class="header-anchor" href="#command-line-interface-cli" aria-hidden="true">#</a> Command line interface (CLI)</h2><h3 id="compile-from-source-code" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code" aria-hidden="true">#</a> Compile from source code</h3><p><strong>RAMAN</strong>METRIX CLI comes with two options that can be used, a <strong>flow based</strong>(ramanmetrixCLI.py) version for a guided user experience, or a <strong>argument based</strong>(ramanmetrixArgCLI.py) verison for a more minimal use case or to be used programatically.</p><p><strong>Opition 1:</strong></p><ol><li><p>Clone the repository to a local directory.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">git</span> clone https://git.photonicdata.science/ramanmetrix-project/ramanmetrix-arg-cli.git 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Create and activate your virtual environment.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    virtualenv your-env-name-here

    your-env-name-here<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>activate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>Run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    pip <span class="token function">install</span> -r requirements.txt
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>If the ramanmetrix_backend.exe is not installed in a default location, please take note of the installation pathway to lauch it manually through the CLI prompts. If you are unable to find it, the ramanmetrixArgCLI comes with a search command named exeFinder that can be run to find it.</p></li><li><p>Run:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    python ramanmetrixCLI.py
            or
    python ramanmetrixArgCLI.py
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><p><strong>Option 2:</strong></p><ol><li>git clone the repository to a local directory (*see optition 1)</li><li>Create and activate your virtual environment (*see optition 1)</li><li>If ramanmetrix_backend.exe is not installed in default location, please take note of installation pathway to lauch it manually through the CLI prompts.</li><li>Run: python setup.py and build the package to a local directory. The program can then be called globally with the following namespace.</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    python setup.py

    ramanmetrixCLI or ramanmetrixArgCLI
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><h4 id="ramanmetrix-argument-cli" tabindex="-1"><a class="header-anchor" href="#ramanmetrix-argument-cli" aria-hidden="true">#</a> RAMANMETRIX Argument CLI</h4><ol><li><p>The user must choose whether to use the offline or online client. If the user would like to use the online client they must call the login command before any other chained commands. The user must provide their username as argument using --username or -u. Example of login call is seen below:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># connection to online client</span>

ramanmetrixArgCLI login <span class="token operator">-</span>u Demouser
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>The user can then choose between 4 different analysis pathway commands:</p><ol><li><strong>Train models</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--params/--noparams (-p/-np): to be set if user wants to upload parameter file.</li><li>--export/--noexport (-x/-nx): to be set if user wants to export model file.</li></ol></li><li><strong>Preprocess</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--export/--noexport (-x/-nx): to be set if user wants to export model file.</li></ol></li><li><strong>Predict</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--export/--noexport (-x/-nx): to be set if user wants to export model file.</li></ol></li><li><strong>apiCall</strong><ol><li>--online/--offline (-on/-off): chooses which backend client to connect to.</li><li>--apicall (-a): argument keyword of apicall to make. These pathways are called by keyword and if the online client is chosen by chaining the command after the login command. Every command asks for boolean flags with the most important being --online/--offline(-on/-off) indicating which client to use.</li></ol></li></ol></li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">#example train model call for online clients</span>

ramanmetrixArgCLI login <span class="token operator">-</span>u Demouser trainmodel <span class="token operator">-</span>on <span class="token operator">-</span>p <span class="token operator">-</span>x 
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="ramanmetrix-flow-cli" tabindex="-1"><a class="header-anchor" href="#ramanmetrix-flow-cli" aria-hidden="true">#</a> RAMANMETRIX Flow CLI</h4><p>The flow based CLI guides the user through a series of prompts that makes similar calls that the argument CLI does but is more user friendly. The user will first be asked if they would like to use the online or offline client. After which the same 4 analysis pathways may be selected for further analysis. After the analysis pathway is finished, the user is asked if they would like to restart the analysis and process more data. An example of the Flow CLI is depicted below:</p><p><img src="`+d+'" alt="Image from alias"></p><h2 id="metadata-loader" tabindex="-1"><a class="header-anchor" href="#metadata-loader" aria-hidden="true">#</a> Metadata loader</h2><h3 id="download-and-run-metaloader" tabindex="-1"><a class="header-anchor" href="#download-and-run-metaloader" aria-hidden="true">#</a> Download and run Metaloader</h3>',18),u=a("The metaloader app allows the user to automatically load folder/file structures into a data table for creating the necessary metadata table needed for use with the "),m=e("strong",null,"RAMAN",-1),b=a("METRIX client. The program can be run locally or built to a specific operating system as an executbale using rust cargo crate manager. For convience purposes, the most recent pre-built versions for x86_64_windows and linux versions are available for download from the releases section of the gitlab repository "),g={href:"https://git.photonicdata.science/Timothy.holbrook/ramanmetrix-metaloader/-/releases",target:"_blank",rel:"noopener noreferrer"},f=a("Metaloader releases"),x=a("."),y=o(`<h3 id="compile-from-source-code-1" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code-1" aria-hidden="true">#</a> Compile from source code</h3><p>If the operating system of the user is not prebuilt, the user can easily build the application locally using the following instructions:</p><p><strong>Build locally using rust:</strong></p><ol><li><p>Clone the repository to a local directory</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://git.photonicdata.science/Timothy.holbrook/ramanmetrix-metaloader.git
<span class="token builtin class-name">cd</span> ramanmetrix-metaloader
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>Install rust</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> --proto <span class="token string">&#39;=https&#39;</span> --tlsv1.2 -sSf https://sh.rustup.rs <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Rust trys to configure the PATH automatically during installation, however if it is not this must be added to enviroment variable path manually. The user can test if <strong>rust</strong> has been added to the PATH via:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>rustc --version
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>The binary can then be built using the following command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cargo build --release
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>The OS specifc binary will then be present and ready for use in the <strong>./your-metaloader-dir/target/release</strong></p></li></ol><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3>`,5),v=e("li",null,"Place the binary file where you would like the resulting metatables to be exported, then run the binary via the filebrowser or command line. This will then prompt the user to select the top directory where the metadata folder structure is located and a directory for exporting the resulting metatables. After completion the program will export two versions of the metatable one for folder only structure and one for file-based batch structure.",-1),w=a("The user can learn more about the correct folder structure to use in the following documentation section "),k={href:"https://git.photonicdata.science/Timothy.holbrook/ramanmetrix-metaloader.git",target:"_blank",rel:"noopener noreferrer"},_=a("defined from folder structure");function I(C,T){const n=t("ExternalLinkIcon");return r(),l(i,null,[h,e("p",null,[u,m,b,e("a",g,[f,s(n)]),x]),y,e("ol",null,[v,e("li",null,[w,e("a",k,[_,s(n)])])])],64)}var R=c(p,[["render",I]]);export{R as default};
