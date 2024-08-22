/*
 * @Author: ShawnPhang
 * @Date: 2022-01-08 09:43:37
 * @Description: 字体处理
 * @LastEditors: ShawnPhang <https://m.palxp.cn>
 * @LastEditTime: 2024-08-12 10:33:36
 */
// import { isSupportFontFamily, blob2Base64 } from './utils'
import { TGetFontItemData, getFonts } from '@/api/material'

const nowVersion = '2' // 当前字体文件版本更新，将刷新前端缓存

/** 字体item类型 */
export type TFontItemData = { url: string } & Omit<TGetFontItemData, 'woff'>

const fontList: TFontItemData[] = []
// const download: any = {}
export const useFontStore = {
  list: fontList,
  // download,
  async init() {
    this.list = []
    localStorage.getItem('FONTS_VERSION') !== nowVersion && localStorage.removeItem('FONTS')
    const localFonts: TFontItemData[] = localStorage.getItem('FONTS') ? JSON.parse(localStorage.getItem('FONTS') || '') : []
    if (localFonts.length > 0) {
      this.list.push(...localFonts)
    }

    if (this.list.length === 0) {
      // TODO: 模拟
      const res = {
        list: [
          {
            id: 543,
            alias: '站酷快乐体',
            preview: '',
            ttf: null,
            woff: 'https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2',
            value: 'zcool-kuaile-regular',
            font_family: '',
            size: 0,
            lang: 'zh',
            woff_size: 0,
          },
          {
            id: 544,
            alias: '极影毁片圆',
            preview: '',
            ttf: null,
            woff: null,
            value: '极影毁片圆 Medium',
            font_family: '极影毁片圆 Medium',
            size: 0,
            lang: 'zh',
            woff_size: 0,
          },
          {
            id: 545,
            alias: '钟齐马善政毛笔楷书',
            preview: '',
            ttf: null,
            woff: null,
            value: 'MaShanZheng-Regular',
            font_family: 'MaShanZheng-Regular',
            size: 0,
            lang: 'zh',
            woff_size: 0,
          },
          {
            id: 546,
            alias: '江西拙楷体2.0',
            preview: '',
            ttf: null,
            woff: null,
            value: 'jiangxizhuokai2',
            font_family: 'jiangxizhuokai2',
            size: 0,
            lang: 'zh',
            woff_size: 0,
          },
          {
            id: 547,
            alias: '千图马克手写体',
            preview: '',
            ttf: null,
            woff: null,
            value: 'QianTuMaKeShouXieTi',
            font_family: 'QianTuMaKeShouXieTi',
            size: 0,
            lang: 'zh',
            woff_size: 0,
          },
          {
            id: 548,
            alias: '胡晓波男神体',
            preview: '',
            ttf: null,
            woff: null,
            value: 'HuXiaoBoNanShenTi',
            font_family: 'HuXiaoBoNanShenTi',
            size: 0,
            lang: 'zh',
            woff_size: 0,
          },
        ],
      }
      this.list.unshift(
        ...res.list.map((x) => {
          const { id, alias, value, preview, woff, lang } = x
          return { id, oid: 0, value, preview, alias, url: woff, lang }
        }),
      )
      localStorage.setItem('FONTS', JSON.stringify(this.list))
      localStorage.setItem('FONTS_VERSION', nowVersion)
    }
    // store.dispatch('setFonts', this.list)
  },
}

// export const useFontStore = () => {
//   return {
//     list: fontList,
//     download,
//     async init() {
//       this.list = []
//       const localFonts: any = localStorage.getItem('FONTS') ? JSON.parse(localStorage.getItem('FONTS') || '') : []
//       if (localFonts.length > 0) {
//         this.list.push(...localFonts)
//       }

//       if (this.list.length === 0) {
//         const res = await getFonts({ pageSize: 400 })
//         this.list.unshift(
//           ...res.map((x: any) => {
//             const { content, id, name, preview } = x
//             return { id, name, preview: preview.url, alias: content.alias, family: content.family, lang: content.lang, ttf: content.ttf, url: content.woff }
//           }),
//         )
//         localStorage.setItem('FONTS', JSON.stringify(this.list))
//       }
//       console.log(this.list)
//     },
//     getList() {
//       return fontList
//     },
//   }
// }

// export const useFontStore = () => {
//   return {
//     list: fontList,
//     download,
//     async init() {
//       this.list = []
//       const localFonts: any = localStorage.getItem('FONTS') ? JSON.parse(localStorage.getItem('FONTS') || '') : []
//       if (localFonts.length > 0) {
//         this.list.push(...localFonts)
//       }

//       if (this.list.length === 0) {
//         for (let i = 1; i < 99; i += 1) {
//           const res = await getFonts(i)
//           this.list.unshift(
//             ...res.map((x: any) => {
//               const { content, id, name, preview } = x
//               return { id, name, preview: preview.url, alias: content.alias, family: content.family, lang: content.lang, ttf: content.ttf, url: content.woff }
//             }),
//           )
//           if (res.length < 100) break
//         }
//         localStorage.setItem('FONTS', JSON.stringify(this.list))
//       }
//     },
//     async addFont2Style(name: string, url: string) {
//       // if (this.download[name]) return;
//       if (isSupportFontFamily(name)) return

//       const response = await fetch(url, { headers: { responseType: 'blob' } })
//       const blob = await response.blob()
//       const ff = new FontFace(name, `url(${URL.createObjectURL(blob)})`)
//       const f = await ff.load()
//       ;(document.fonts as FontFaceSet).add(f)

//       const b64 = await blob2Base64(blob)
//       // 使用 base64 是为了方便将 DOM 生成图片
//       this.download[name] = b64
//       // document.head.appendChild(generateFontStyle(name, b64));
//     },
//   }
// }
