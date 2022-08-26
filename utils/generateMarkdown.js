require('./SectionData.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (!license){
    return "";
  }
  switch (license) {
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "GNU GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU LGPL":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Eclipse Public License version 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-2.0)";
    default:
      break;
  }
}


//  function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return "";
  }
  switch (license) {
    case "Apache 2.0":
      return "[Apache License \nVersion 2.0, January 2004](https://opensource.org/licenses/Apache-2.0)";
    case "MIT License":
      return "[Copyright <YEAR> <COPYRIGHT HOLDER> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.](https://opensource.org/licenses/MIT)";
    case "BSD 3-Clause":
      return "[Copyright <YEAR> <COPYRIGHT HOLDER> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause":
      return "[Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: \n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.](https://opensource.org/licenses/BSD-2-Clause)";
    case "GNU GPL":
      return "[GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright © 2007 Free Software Foundation, Inc. ](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU LGPL":
      return "[GNU LESSER GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright © 2007 Free Software Foundation, Inc. )](https://www.gnu.org/licenses/lgpl-3.0)";
    case "Mozilla Public License 2.0":
      return "[Mozilla Public License 2.0 (MPL-2.0)](https://opensource.org/licenses/MPL-2.0)";
    case "Eclipse Public License version 2.0":
      return "Eclipse Public License - v 2.0)](https://opensource.org/licenses/EPL-2.0)";
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README from an array of SectionData objects
function generateMarkdown(data) {
  return `# ${data.Title}\n
  ${renderLicenseBadge(data.License)}\n
  \n
  # Description\n
    ${data.Description}\n
    \n
  ## Table of Contents\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Collaborators](#collaborators)\n
  [Contributing](#contributing)\n
  [Tests](#tests)\n
  [Questions](#questions)\n
  \n
  # Installation\n
  ${data.Installation}\n
  \n
  # Usage \n
  ${data.Usage}\n
  \n
  # License \n
  ${renderLicenseSection(data.License)}\n
  \n
  # Collaborators\n
  ${data.Credits}\n
  \n
  # Contributing\n
  ${data.Contributing}\n
  \n
  # Tests\n
  ${data.Testing}\n
  \n

  # Questions\n
  [Github](${data.GitHub})\n
  [Email](mailto:${data.Email})
  \n

  `;
}

//would like to implement a modular system that generates any given section with title and everything, but for this that would be overkill. 
//The user might as well simply type up the entire readme themselves
function genSingleSection(){

}

module.exports = generateMarkdown;
