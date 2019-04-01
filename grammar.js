module.exports = grammar({
  name: 'fastq',

  rules: {
    source_file: $ => repeat($._entry),

    _entry: $ => seq(
      $.header,
      $.sequence,
      $.divider,
      $.quality
    ),

    header: $ => seq(
      '@',
      $.text
    ),
    sequence: $ => repeat1(
      $.base
    ),
    divider: $ => '+',
    quality: $ => repeat1(
      $.text
    ),

    base: $ => /[ATGCatgc]+/,
    text: $ => /[a-zA-Z0-9]+/
  }
});
