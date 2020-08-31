+++
title = "{{ replace .Name "-" " " | title }}"
date = "{{ .Date }}"
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."
# menu = "main"
tags = [{{ range $plural, $terms := .Site.Taxonomies }}{{ range $term, $val := $terms }}"{{ printf "%s" $term }}",{{ end }}{{ end }}]
+++

This is a page about »{{ replace .Name "-" " " | title }}«.
