// window.onload = (event) => {
//
//   let footer = document.querySelector('.site-footer');
//
//   if (footer && footer.hasChildNodes()) {
//       footer.removeChild(document.querySelector('.site-footer *'));
//       footer.appendText('Made With Love First 💖');
//   }
//
//   // // <link rel="icon" href="/favicon.ico?806c195b91fe002387c7">
//   // let link = document.querySelector('head link[rel="icon"]');
//   // if (link) {
//   //   link.setAttr('href', 'https://v1.goinglovefirst.com/favicon.ico');
//   // }
//
// };

var changeFooter = function() {
  console.log("changeFooter is called");
  let footer = document.querySelector('.site-footer');

  if (footer && footer.hasChildNodes()) {
      footer.removeChild(document.querySelector('.site-footer *'));
      footer.appendText('Made With Love First 💖');
  }
}


// —————— From The Tome Awaits's publish.js ——————


// Need to figure out a way to access some form of storage or info key for some of the stories.
// For this, I particularly have the stories involving Myrrda's log files in mind.

/**
 * Place any paths, filenames, or path parts to remove from display here. These DO NOT need to
 *  be complete!
 */
const HIDDEN_FILES = [
  "_quotes",
  "_BLOCKS",
  "_templates"
]

/**
 * Hides any files in the navigation panel that match items in the `HIDDEN_FILES` constant
 *  above by setting the CSS `display` property to `none` for matching elements.
 * Right now, the search is extremely rudimentary and makes use of `String.prototype.includes`
 *  to determine which items match.
 */
function hideFromNavTree() {
  let files = document.getElementsByClassName('tree-item-self')
  for (let file of files) {
    const datapath = file.getAttribute('data-path')
    // if (datapath == null) {
    //   continue
    // }
    let is_hidden = false
    for (let hidden of HIDDEN_FILES) {
      is_hidden = datapath.includes(hidden)
      console.log(`${file} ${is_hidden ? 'should' : 'should not'} be hidden`)
      if (is_hidden) {
        file.style.display = 'none'
        break
      }
    }
  }
}

document.onload = () => {
  hideFromNavTree();
  changeFooter();
}
