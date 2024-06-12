# # 获取最新的 tag 名称
# latest_tag=$(git describe --tags --abbrev=0)

# # 去掉 tag 名称中的 'v' 前缀
# new_tag=${latest_tag#v}

# echo "Latest tag without 'v' prefix: $new_tag"

LATEST_TAG=$(git describe --tags --abbrev=0)
echo "GIT_TAG=${LATEST_TAG#v}"
