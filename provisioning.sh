#!/bin/bash

mkdir components
mkdir components/blog
mkdir components/company
mkdir components/contact
mkdir components/home
mkdir components/layouts
mkdir components/recruit
mkdir components/service
mkdir components/utils
mkdir data
mkdir lib
mkdir pages/blog
mkdir pages/blog/page
mkdir pages/recruit

touch components/blog/Post.tsx
touch components/blog/Posts.tsx
touch components/company/About.tsx
touch components/contact/Form.tsx
touch components/home/Introductions.tsx
touch components/home/Slider.tsx
touch components/layouts/Footer.tsx
touch components/layouts/Header.tsx
touch components/layouts/PageTemplate.tsx
touch components/recruit/Jobs.tsx
touch components/recruit/Qualifications.tsx
touch components/recruit/Slider.tsx
touch components/service/Features.tsx
touch components/utils/Link.tsx
touch components/utils/ScrollUp.tsx
touch components/utils/ShareButton.tsx
touch components/utils/SocialMedia.tsx
touch components/utils/theme.ts
touch data/routes.ts
touch lib/api.ts

touch "pages/blog/page/[number].tsx"
touch "pages/blog/[id].tsx"
touch "pages/recruit/[job].tsx"
touch pages/_document.tsx
touch pages/company.tsx
touch pages/contact.tsx
touch pages/recruit.tsx
touch pages/service.tsx

touch .env.local

mkdir src
mv components data lib pages styles src