function rot(str, rotValue) {
  return str.replace(/[!-~]/g, function(char) {
    const start = 33;
    const end = 126;
    const range = end - start + 1;
    const code = char.charCodeAt(0);
    const shifted = ((code - start + parseInt(rotValue)) % range + range) % range + start;
    return String.fromCharCode(shifted);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.rot-email').forEach(function(el) {
    const rotValue = el.getAttribute('data-rot') || "13";
    const encoded = el.getAttribute('data-encoded');
    if (encoded) {
      const decoded = rot(encoded, -parseInt(rotValue));
      const a = document.createElement('a');
      a.href = "mailto:" + decoded;
      a.textContent = decoded;
      el.replaceWith(a);
    }
  });
});
