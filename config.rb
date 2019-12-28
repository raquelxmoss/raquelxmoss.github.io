###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  blog.permalink = "{title}.html"
  # Matcher for blog source files
  blog.sources = "content/blog/{title}.html"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  blog.default_extension = ".md"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  blog.layout = "article"
  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

activate :gh_pages do |gh_pages|
  gh_pages.remote = "git@github.com:raquelxmoss/raquelxmoss.github.io.git"
  gh_pages.branch = "master"
end

page "/feed.xml", layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
end

activate :directory_indexes

helpers do
  def unsplash_link(credit)
    artist_name, artist_handle = *credit
    "Featured image by <a href='https://unsplash.com/#{artist_handle}' class='article-featured-image-credit'>#{artist_name}</a>"
  end
end
