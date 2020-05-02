import React from 'react'
import Svg from '../elements/Svg'

export const Hugo = ({ color = '#ff4088', ...props }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    fillRule='evenodd'
    strokeLinejoin='round'
    strokeMiterlimit='1.414'
    clipRule='evenodd'
    viewBox='0 0 400 400'
    {...props}
  >
    <path
      fill={color}
      d='M358.814 255.552V133.299a44.839 44.839 0 00-22.124-38.66c-29.417-17.282-81.387-47.818-113.215-66.518a52.626 52.626 0 00-54.28.58L68.706 90.666a57.932 57.932 0 00-27.524 49.309v125.172a56.104 56.104 0 0027.793 48.436l104.718 61.211a45.606 45.606 0 0045.204.47L334.84 310.69a46.693 46.693 0 0023.973-40.791v-14.347z'
    />
    <path
      fill='#c9177e'
      d='M196.955 7.37h.277l.248.003h.028l.249.003h.027l.248.004.029.001.248.005.028.001.249.006.028.001.248.007h.029l.248.009.029.001.248.009.027.001.248.01.029.002.248.011.029.002.248.013.029.001.248.013.027.001.248.015.029.001.248.016.029.001.248.018.027.001.248.019.029.001.248.019.027.003.248.018.03.003.246.02.028.003.249.021.027.003.248.023.029.003.247.023.028.003.247.026.029.003.248.025.027.003.248.027.027.003.249.028.027.004.248.028.027.003.247.03.029.005.247.03.028.004.247.032.027.004.247.033.029.004.246.035.028.002.247.036.028.005.247.035.027.005.247.037.027.004.247.039.029.004.245.04.029.005.245.04.027.004.247.042.028.004.246.043.028.006.245.043.029.005.245.045.027.004.246.046.027.006.246.046.028.005.244.048.029.005.245.049.028.006.244.05.028.006.244.051.029.006.244.052.027.005.244.053.029.006.244.055.027.005.244.056.028.006.244.056.027.007.244.056.027.007.244.059.028.005.242.06.03.006.242.06.027.008.243.061.027.007.243.062.028.007.242.065.028.007.242.064.027.008.243.064.027.009.241.066.029.007.241.069.028.007.24.068.028.008.241.07.028.007.241.072.027.007.24.071.028.01.241.072.027.009.24.073.027.008.24.075.028.009.24.076.027.008.239.077.027.01.24.076.027.01.239.08.027.008.239.08.027.009.239.081.027.009.237.083.027.009.239.083.027.01.237.084.028.01.237.085.027.01.237.086.026.01.238.087.027.01.236.088.027.011.236.09.027.01.236.09.027.01.236.091.026.012.236.091.026.012.236.093.026.01.236.095.026.011.234.096.027.01.234.098.027.01.234.098.026.01.233.1.028.01.233.101.026.012.233.1.026.011.233.102.026.012.232.103.027.011.232.105.026.011.231.106.026.012.232.106.026.011.23.108.028.013.23.107.026.013.23.109.026.013.23.11.025.012.23.111.027.013.229.112.026.013.229.113.026.013.227.115.026.013.228.116.026.013.228.116.026.014.227.118.025.012.228.12.025.012.227.12.024.014.227.12.026.014.226.122.024.013.225.123.026.014.225.124.025.014.225.125.026.014.223.126.026.014.224.127.024.014.224.127.025.016.223.13.025.014.215.126.014.007 113.227 66.526.19.112.024.014.184.11.024.015.183.11.023.014.184.11.023.015.183.112.023.014.182.113.024.015.182.113.023.014.18.115.023.014.18.115.024.014.179.116.023.015.179.116.024.015.179.116.023.016.177.116.024.016.177.118.023.015.176.12.023.015.176.119.023.014.175.12.023.016.176.12.023.018.173.12.023.016.173.122.024.016.173.123.022.016.173.123.022.016.173.123.022.017.171.125.022.016.17.124.024.017.17.126.022.016.17.126.022.018.17.127.021.016.168.127.022.018.167.127.024.017.166.13.022.016.168.13.021.017.165.13.022.017.172.135.031.026.325.26.042.033.326.267.044.034.324.27.042.036.322.27.041.035.32.274.041.035.318.277.041.036.315.278.04.037.313.28.041.037.31.282.04.037.306.287.04.037.305.287.04.038.302.29.04.039.298.292.04.037.296.295.04.039.294.297.038.038.292.298.038.04.289.301.038.04.287.303.036.04.285.305.037.04.281.308.037.04.278.31.037.042.277.31.035.042.274.314.036.04.27.317.035.041.269.319.035.041.266.321.034.042.263.322.034.042.26.323.035.043.258.327.032.042.255.328.033.043.252.33.033.044.25.33.032.045.247.334.031.043.244.337.032.044.241.337.031.045.24.34.03.044.236.342.03.044.233.343.03.044.23.346.03.046.229.346.028.046.225.348.029.046.22.35.03.046.219.352.029.046.215.354.029.046.212.355.028.048.21.356.028.048.207.36.026.045.205.361.027.048.202.362.026.047.198.364.026.048.196.365.026.049.192.367.025.047.19.368.024.049.186.37.025.048.184.372.025.048.18.374.024.049.177.374.024.049.174.375.023.05.172.379.022.048.169.38.022.049.166.381.022.05.164.381.02.05.16.383.02.05.157.386.02.05.154.385.02.05.15.389.021.05.147.39.02.05.144.39.018.05.142.391.019.052.137.394.018.05.135.394.018.052.132.394.017.051.13.397.015.053.127.397.015.052.123.398.016.052.12.4.015.052.116.402.015.051.113.403.015.052.11.402.014.053.107.404.013.053.104.406.014.053.1.407.013.053.097.407.012.053.094.408.01.053.092.41.011.055.087.41.011.052.085.412.01.054.081.411.01.055.078.413.01.054.073.414.01.055.07.414.01.054.067.416.008.054.064.417.008.055.06.41.005.041.03.215.004.027.028.21.004.027.027.21.004.028.026.209.003.027.026.21.004.026.024.21.003.027.025.21.002.03.024.21.002.027.022.21.003.026.022.213.002.027.02.212.004.026.019.212.002.027.02.212.002.027.018.21.003.028.016.21.003.03.016.212.001.027.015.212.003.027.014.212.003.027.013.214.002.027.012.214.001.027.012.212.002.027.01.212.002.029.011.212.001.029.009.212v.027l.01.212v.03l.009.214v.027l.006.213.002.026.005.214v.03l.006.213v.028l.004.213.001.029.003.213v.027l.003.214v.029l.001.213v137.126l-.001.228v.029l-.003.226v.029l-.004.226v.027l-.004.228-.002.029-.005.226v.03l-.007.224v.029l-.008.226v.029l-.008.226-.002.027-.01.225v.03l-.01.227-.001.027-.011.227-.002.027-.012.225-.001.027-.013.225-.002.03-.014.225-.001.029-.015.225-.002.027-.016.223-.001.03-.017.224-.003.029-.017.225-.002.028-.019.224-.002.029-.02.223-.002.027-.02.224-.003.027-.02.224-.004.03-.023.223-.003.027-.021.223-.004.03-.024.222-.004.027-.024.224-.003.028-.026.224-.004.026-.026.222-.004.028-.027.222-.004.03-.029.22-.004.028-.029.223-.004.028-.03.22-.004.028-.031.22-.004.03-.033.222-.004.027-.033.22-.005.03-.033.218-.005.028-.035.22-.005.029-.035.22-.006.028-.035.22-.006.026-.038.221-.004.029-.04.219-.004.027-.04.218-.005.029-.04.217-.005.028-.042.219-.004.029-.042.217-.006.028-.043.219-.006.029-.045.216-.004.026-.045.218-.007.028-.045.218-.007.027-.046.218-.005.026-.048.218-.006.025-.049.218-.007.027-.049.217-.005.027-.05.216-.007.028-.052.216-.006.026-.051.215-.007.028-.053.215-.007.028-.055.215-.007.027-.054.215-.007.026-.054.214-.009.028-.056.213-.006.027-.058.214-.006.027-.06.212-.007.029-.059.213-.008.028-.06.213-.007.026-.06.212-.008.027-.061.212-.009.026-.062.212-.009.029-.062.212-.008.026-.065.21-.008.026-.065.21-.008.028-.066.21-.008.028-.067.21-.008.025-.068.21-.008.028-.07.21-.008.026-.07.21-.008.025-.07.21-.009.025-.07.21-.01.025-.071.21-.01.027-.073.208-.009.025-.073.208-.01.026-.075.208-.01.025-.074.207-.01.027-.075.206-.01.026-.077.207-.01.025-.077.207-.01.025-.079.207-.01.026-.08.205-.01.025-.08.205-.01.026-.081.204-.01.025-.082.205-.01.026-.084.204-.01.025-.082.204-.011.026-.085.202-.01.027-.087.202-.01.026-.085.202-.011.026-.087.2-.011.026-.089.202-.01.026-.09.2-.009.025-.09.2-.012.026-.09.2-.011.025-.09.2-.012.027-.093.2-.011.025-.093.197-.01.026-.095.2-.01.024-.095.197-.012.026-.095.198-.013.024-.095.2-.012.024-.097.198-.011.024-.098.196-.013.025-.098.196-.012.026-.1.195-.012.025-.1.195-.012.025-.1.195-.014.025-.101.195-.012.023-.103.194-.012.024-.103.195-.014.024-.104.194-.012.024-.105.194-.012.022-.105.192-.014.025-.106.193-.014.023-.106.192-.015.025-.108.192-.012.023-.11.19-.013.024-.109.191-.014.024-.11.19-.014.024-.11.19-.015.023-.11.188-.014.025-.113.187-.014.025-.113.187-.015.025-.113.186-.015.024-.115.188-.014.022-.116.187-.015.025-.115.186-.015.021-.116.187-.015.023-.119.186-.015.023-.119.185-.013.023-.12.184-.015.025-.12.183-.015.022-.12.183-.017.023-.12.184-.016.021-.121.182-.017.024-.122.182-.017.023-.124.182-.015.022-.124.18-.016.023-.126.18-.016.024-.125.179-.015.021-.127.18-.017.024-.128.179-.016.023-.127.178-.016.021-.128.178-.018.023-.13.177-.016.023-.131.177-.016.021-.131.176-.017.022-.13.176-.018.023-.134.175-.016.021-.134.175-.016.023-.135.173-.015.022-.135.173-.018.023-.136.174-.017.021-.136.172-.016.022-.138.172-.018.022-.138.171-.016.02-.139.172-.019.023-.14.17-.015.02-.14.17-.019.021-.14.17-.018.022-.142.168-.017.021-.142.168-.018.021-.143.168-.018.02-.143.168-.019.021-.145.167-.017.02-.145.166-.019.021-.146.165-.018.022-.147.164-.018.02-.147.165-.019.02-.147.164-.018.02-.148.163-.02.022-.15.162-.017.02-.15.162-.02.021-.15.16-.02.022-.151.16-.02.02-.15.16-.021.021-.153.16-.017.02-.155.157-.019.02-.154.159-.019.02-.155.158-.02.02-.156.157-.02.019-.155.156-.02.02-.157.156-.02.02-.157.155-.02.019-.157.155-.02.02-.16.154-.02.02-.16.152-.02.02-.159.152-.02.02-.163.152-.02.02-.161.15-.02.02-.163.151-.022.019-.162.15-.02.02-.163.148-.02.019-.165.149-.022.02-.165.149-.02.019-.167.147-.02.017-.165.148-.022.019-.166.146-.022.018-.168.147-.022.018-.167.145-.02.019-.17.143-.022.018-.17.145-.022.019-.169.142-.02.017-.17.143-.024.019-.172.142-.02.017-.173.142-.022.017-.173.142-.022.017-.173.139-.022.017-.175.14-.023.018-.175.139-.02.017-.176.136-.022.019-.176.136-.021.017-.178.138-.023.017-.177.136-.022.016-.179.136-.023.017-.178.135-.022.017-.179.133-.022.016-.18.132-.024.018-.18.132-.023.017-.182.132-.023.016-.181.13-.023.018-.182.13-.023.016-.184.13-.023.016-.184.129-.022.016-.184.127-.025.017-.184.127-.023.017-.185.126-.023.016-.187.126-.023.015-.187.125-.025.017-.187.124-.023.015-.188.124-.023.015-.188.124-.025.015-.19.122-.024.016-.19.122-.023.014-.19.122-.025.014-.191.12-.023.015-.191.119-.025.016-.193.119-.025.015-.192.118-.023.013-.192.117-.026.016-.195.116-.025.014-.193.115-.024.014-.196.115-.025.016-.196.113-.024.014-.197.113-.024.015-.197.112-.024.014-.198.112-.026.014-.19.107-.014.008-115.958 64.581-.012.007-.183.102-.023.013-.191.103-.025.014-.19.104-.025.013-.191.103-.025.013-.19.101-.025.013-.191.102-.025.013-.19.099-.025.013-.192.1-.025.011-.192.1-.025.012-.192.098-.026.013-.193.096-.024.012-.193.096-.025.012-.193.095-.026.012-.194.095-.023.011-.194.094-.026.013-.195.093-.025.011-.194.092-.026.011-.194.09-.026.012-.193.09-.025.012-.195.089-.027.011-.195.089-.026.011-.196.088-.026.011-.196.086-.025.012-.196.086-.025.01-.196.084-.026.012-.198.084-.026.012-.197.083-.025.01-.196.082-.026.011-.198.082-.026.01-.199.081-.026.01-.198.08-.024.01-.2.078-.025.012-.2.078-.025.01-.2.076-.024.01-.199.076-.026.01-.2.076-.026.01-.2.075-.025.01-.2.074-.026.009-.2.073-.025.01-.2.072-.027.01-.2.071-.026.009-.202.07-.027.01-.2.07-.025.01-.202.066-.026.01-.2.068-.026.008-.203.068-.028.008-.201.068-.025.007-.202.066-.027.008-.202.065-.026.008-.201.065-.028.009-.203.061-.024.009-.21.064-.04.012-.4.12-.053.016-.406.117-.053.016-.408.115-.053.014-.41.112-.05.014-.41.11-.053.012-.41.106-.052.013-.41.102-.054.013-.412.097-.053.013-.412.095-.053.012-.412.092-.053.012-.413.087-.053.011-.413.085-.053.011-.415.08-.052.012-.414.078-.055.01-.414.074-.054.01-.415.07-.054.01-.415.068-.054.008-.416.065-.054.008-.416.06-.053.01-.417.057-.054.007-.417.054-.054.007-.418.052-.053.006-.417.047-.054.007-.418.044-.054.005-.419.041-.053.006-.419.037-.054.005-.419.034-.054.004-.418.03-.054.005-.419.027-.054.004-.419.025-.054.002-.42.02-.054.003-.42.018-.053.001-.42.014-.054.002-.42.011-.053.002-.42.007h-.053l-.42.004h-.055l-.42.002h-.054l-.42-.003h-.052l-.42-.007h-.055l-.42-.01-.053-.002-.42-.013-.054-.001-.42-.016-.054-.003-.418-.02-.055-.001-.418-.023-.055-.005-.418-.025-.055-.003-.419-.03-.053-.005-.418-.033-.055-.004-.418-.036-.054-.005-.418-.04-.055-.005-.417-.043-.053-.006-.417-.045-.055-.008-.417-.048-.053-.008-.418-.053-.054-.007-.416-.056-.053-.008-.417-.059-.054-.009-.416-.063-.053-.008-.416-.066-.053-.009-.416-.07-.053-.009-.414-.073-.053-.01-.415-.077-.053-.01-.413-.079-.053-.011-.414-.083-.054-.012-.412-.086-.053-.011-.412-.09-.053-.012-.412-.093-.053-.013-.41-.096-.054-.013-.41-.1-.052-.013-.41-.103-.053-.015-.41-.106-.051-.014-.41-.11-.053-.015-.407-.113-.052-.016-.408-.116-.052-.016-.406-.12-.052-.016-.405-.123-.052-.016-.404-.127-.052-.016-.398-.129-.04-.013-.207-.067-.026-.009-.202-.067-.027-.01-.2-.068-.027-.008-.2-.069-.026-.009-.2-.07-.026-.008-.2-.072-.027-.009-.2-.071-.026-.009-.2-.073-.026-.009-.2-.073-.025-.01-.2-.074-.025-.009-.2-.074-.025-.01-.2-.076-.025-.01-.2-.076-.025-.01-.2-.078-.024-.01-.199-.077-.024-.01-.2-.08-.024-.01-.2-.08-.025-.01-.198-.08-.024-.01-.197-.083-.026-.01-.197-.083-.026-.011-.198-.083-.024-.01-.197-.085-.024-.01-.197-.084-.027-.012-.195-.086-.024-.01-.197-.087-.024-.012-.197-.087-.026-.012-.195-.087-.024-.012-.195-.088-.025-.012-.195-.09-.026-.012-.193-.09-.025-.011-.193-.092-.026-.013-.195-.092-.025-.013-.193-.093-.025-.011-.192-.093-.026-.013-.192-.095-.026-.013-.194-.096-.023-.011-.192-.096-.025-.013-.192-.098-.025-.012-.19-.098-.025-.013-.192-.099-.025-.013-.192-.1-.025-.013-.19-.1-.024-.013-.19-.102-.025-.014-.191-.102-.023-.013-.19-.103-.024-.013-.19-.104-.024-.013-.19-.105-.024-.014-.189-.106-.024-.013-.188-.108-.024-.012-.188-.108-.026-.014-.186-.108-.024-.014-.18-.105-.013-.007-104.732-61.218-.012-.007-.22-.13-.023-.014-.225-.133-.025-.014-.223-.134-.023-.014-.224-.135-.025-.015-.223-.136-.023-.015-.223-.136-.023-.014-.222-.138-.025-.016-.22-.137-.024-.016-.22-.139-.024-.016-.218-.139-.023-.014-.218-.142-.025-.016-.218-.141-.023-.015-.217-.142-.023-.015-.217-.144-.023-.015-.217-.145-.023-.016-.216-.145-.021-.015-.216-.147-.023-.015-.213-.147-.023-.015-.213-.148-.023-.016-.212-.147-.024-.017-.211-.15-.023-.015-.21-.15-.023-.016-.212-.151-.022-.016-.21-.152-.021-.015-.209-.154-.022-.015-.208-.154-.022-.016-.207-.154-.024-.016-.206-.155-.023-.017-.206-.156-.021-.016-.206-.156-.02-.017-.205-.157-.023-.017-.204-.159-.021-.017-.204-.158-.021-.017-.202-.159-.022-.017-.202-.16-.022-.018-.2-.16-.022-.017-.2-.162-.022-.02-.2-.161-.021-.017-.198-.162-.022-.019-.197-.163-.022-.017-.196-.167-.022-.017-.197-.166-.02-.017-.195-.165-.022-.019-.196-.167-.02-.017-.194-.168-.02-.019-.194-.167-.02-.019-.194-.17-.02-.018-.193-.169-.02-.018-.191-.17-.02-.02-.192-.17-.02-.019-.19-.172-.02-.018-.188-.174-.02-.018-.189-.174-.02-.017-.187-.175-.02-.02-.188-.175-.019-.018-.185-.175-.02-.019-.186-.176-.02-.019-.183-.177-.02-.019-.185-.178-.019-.02-.182-.177-.02-.02-.182-.18-.02-.018-.18-.18-.02-.02-.181-.18-.02-.019-.18-.182-.018-.018-.179-.182-.019-.02-.179-.182-.017-.02-.178-.184-.019-.018-.177-.185-.02-.02-.175-.185-.019-.019-.175-.186-.019-.02-.173-.185-.019-.02-.173-.186-.02-.02-.171-.188-.02-.02-.17-.188-.019-.02-.17-.189-.02-.02-.17-.19-.017-.02-.17-.19-.018-.02-.168-.19-.018-.02-.168-.191-.019-.022-.166-.19-.018-.02-.166-.194-.018-.02-.165-.193-.018-.022-.165-.193-.017-.02-.164-.195-.016-.02-.164-.195-.018-.022-.162-.195-.016-.021-.162-.196-.017-.022-.16-.196-.017-.022-.161-.196-.016-.021-.16-.198-.016-.022-.158-.199-.017-.021-.158-.2-.016-.02-.156-.2-.017-.022-.156-.2-.016-.022-.154-.2-.017-.022-.154-.202-.016-.022-.153-.202-.018-.021-.151-.204-.016-.021-.152-.204-.016-.021-.15-.203-.016-.023-.15-.205-.015-.022-.149-.205-.016-.021-.149-.207-.015-.021-.147-.206-.017-.023-.145-.207-.015-.021-.146-.208-.015-.023-.145-.208-.016-.021-.143-.21-.015-.022-.144-.21-.016-.021-.142-.21-.015-.022-.14-.21-.015-.024-.14-.21-.016-.023-.14-.211-.014-.023-.139-.212-.015-.021-.138-.213-.015-.024-.136-.212-.015-.023-.135-.213-.015-.023-.135-.214-.015-.024-.133-.214-.015-.024-.134-.215-.014-.022-.132-.216-.015-.023-.13-.216-.016-.023-.13-.218-.014-.021-.13-.218-.014-.023-.13-.218-.013-.024-.128-.218-.014-.023-.126-.22-.014-.022-.127-.22-.013-.024-.126-.22-.014-.022-.124-.22-.013-.025-.124-.22-.013-.024-.122-.222-.014-.023-.121-.222-.014-.023-.121-.223-.013-.023-.12-.224-.013-.023-.119-.223-.013-.025-.118-.223-.013-.025-.118-.223-.012-.024-.116-.225-.013-.023-.115-.227-.014-.024-.114-.225-.012-.025-.114-.226-.012-.024-.113-.227-.012-.024-.112-.226-.012-.025-.11-.226-.013-.026-.11-.228-.013-.024-.109-.23-.01-.022-.11-.23-.01-.024-.109-.23-.012-.024-.106-.23-.011-.025-.106-.23-.011-.025-.105-.23-.011-.025-.104-.23-.01-.026-.104-.231-.011-.024-.101-.233-.012-.025-.101-.233-.011-.025-.1-.233-.01-.024-.1-.233-.01-.025-.098-.235-.01-.024-.099-.235-.01-.025-.096-.235-.01-.024-.095-.235-.011-.026-.094-.235-.011-.026-.093-.235-.01-.025-.094-.237-.01-.024-.09-.237-.01-.025-.091-.238-.01-.026-.09-.236-.01-.026-.088-.238-.01-.024-.088-.24-.01-.026-.086-.237-.01-.026-.085-.24-.01-.025-.086-.24-.008-.024-.084-.24-.009-.027-.083-.239-.01-.026-.081-.24-.01-.026-.08-.24-.01-.027-.08-.242-.008-.026-.08-.24-.008-.026-.079-.242-.008-.028-.078-.242-.008-.026-.076-.242-.008-.026-.075-.243-.008-.026-.075-.244-.009-.025-.073-.244-.007-.027-.074-.244-.006-.026-.073-.245-.007-.025-.07-.245-.009-.026-.07-.247-.006-.026-.07-.245-.006-.027-.069-.245-.006-.026-.067-.246-.007-.027-.065-.247-.007-.026-.066-.248-.007-.025-.064-.248-.006-.026-.063-.248-.007-.026-.061-.248-.007-.027-.06-.248-.007-.027-.06-.248-.007-.026-.058-.249-.006-.027-.058-.25-.006-.025-.057-.25-.006-.027-.056-.25-.006-.026-.055-.25-.005-.027-.055-.25-.005-.028-.054-.25-.005-.027-.052-.25-.005-.028-.05-.25-.006-.028-.05-.252-.005-.026-.049-.252-.005-.027-.048-.252-.005-.027-.047-.253-.004-.027-.046-.252-.006-.027-.043-.253-.006-.027-.043-.253-.004-.028-.044-.253-.004-.026-.041-.254-.006-.027-.04-.255-.005-.027-.04-.254-.003-.027-.038-.254-.004-.028-.039-.254-.002-.027-.037-.255-.004-.028-.036-.255-.004-.028-.034-.255-.004-.028-.033-.255-.004-.027-.033-.256-.002-.028-.032-.256-.004-.027-.03-.257-.002-.027-.03-.257-.003-.027-.027-.256-.005-.029-.027-.256-.003-.028-.025-.258-.003-.027-.025-.258-.002-.027-.025-.258-.003-.027-.022-.258-.002-.027-.022-.258-.003-.029-.02-.258-.003-.027-.02-.26-.002-.027-.019-.258-.001-.028-.018-.258-.001-.029-.018-.258-.001-.028-.015-.26-.002-.027-.015-.26-.001-.028-.014-.26-.001-.027-.012-.26-.002-.028-.01-.26-.002-.028-.011-.26-.001-.028-.009-.26v-.028l-.01-.26v-.028l-.007-.26v-.028l-.006-.26-.001-.03-.004-.26-.002-.027-.004-.263v-.027l-.002-.262v-.027l-.002-.261v-.029l-.001-.255V139.955l.001-.257v-.027l.002-.262v-.027l.002-.263v-.027l.004-.262v-.027l.006-.263v-.028l.007-.261v-.027l.007-.262v-.028l.01-.262v-.027l.009-.261v-.027l.01-.262.002-.028.01-.26.002-.028.012-.26.002-.028.012-.26.001-.028.015-.26.002-.028.015-.26.001-.028.017-.26.002-.028.017-.26.002-.026.018-.261.003-.026.019-.26.001-.028.02-.26.003-.027.022-.259.002-.027.023-.258.003-.027.023-.26.002-.027.025-.26.003-.025.026-.26.002-.027.026-.258.003-.027.029-.258.002-.027.029-.258.003-.027.03-.258.002-.026.032-.258.003-.027.032-.257.003-.027.033-.256.004-.028.033-.256.004-.027.035-.257.003-.027.037-.257.002-.025.037-.257.004-.027.038-.255.005-.027.04-.255.003-.028.04-.255.004-.027.04-.255.005-.026.042-.255.004-.027.044-.255.004-.026.043-.255.005-.026.045-.253.005-.028.046-.253.004-.028.048-.253.004-.026.048-.254.005-.025.05-.254.005-.026.05-.254.005-.025.05-.253.005-.027.052-.252.006-.026.053-.252.005-.026.055-.252.005-.026.055-.25.005-.028.056-.25.007-.026.056-.251.007-.027.057-.25.007-.027.059-.25.005-.025.06-.25.007-.027.06-.249.007-.026.061-.249.007-.026.062-.25.007-.025.063-.25.007-.025.065-.248.007-.026.066-.248.006-.025.067-.248.007-.026.067-.248.008-.026.068-.246.007-.026.07-.247.006-.025.071-.247.008-.026.071-.246.007-.026.072-.245.009-.026.073-.245.007-.026.075-.245.008-.025.075-.245.008-.025.075-.245.009-.026.077-.243.008-.026.078-.244.008-.025.08-.243.008-.025.08-.243.008-.025.08-.243.009-.025.082-.243.01-.025.081-.241.01-.026.083-.24.01-.026.084-.241.008-.026.086-.24.01-.025.085-.24.01-.027.087-.239.01-.024.088-.24.009-.025.09-.24.01-.024.09-.24.009-.024.091-.239.01-.024.09-.238.01-.025.095-.237.01-.025.093-.238.01-.024.095-.237.01-.025.095-.237.011-.024.097-.235.01-.026.098-.235.01-.024.097-.235.011-.025.1-.235.01-.024.1-.235.011-.024.101-.234.01-.024.103-.234.011-.024.102-.234.011-.023.105-.233.011-.025.105-.232.011-.024.105-.23.012-.025.107-.232.01-.023.108-.232.011-.023.11-.231.01-.024.11-.23.012-.024.11-.23.01-.024.113-.229.01-.024.114-.228.01-.025.114-.227.012-.025.113-.228.013-.023.114-.227.012-.023.116-.228.013-.023.117-.227.01-.022.12-.227.012-.024.118-.225.013-.023.118-.225.012-.024.12-.224.014-.024.12-.224.014-.023.121-.223.012-.023.123-.224.014-.023.122-.223.014-.023.124-.222.014-.023.125-.221.014-.024.125-.221.014-.023.127-.22.013-.024.128-.219.013-.023.13-.22.013-.023.13-.22.013-.023.131-.217.014-.023.13-.218.014-.023.132-.218.015-.023.133-.216.013-.023.135-.216.014-.023.135-.215.014-.023.136-.215.014-.023.136-.215.015-.023.138-.213.013-.023.14-.214.013-.023.139-.213.015-.022.14-.213.015-.022.14-.212.016-.023.142-.212.013-.021.144-.211.015-.023.143-.21.015-.022.144-.21.015-.022.145-.21.015-.021.146-.21.016-.02.146-.21.016-.021.148-.208.015-.022.148-.208.015-.021.15-.206.015-.022.15-.206.017-.022.15-.206.016-.022.151-.204.017-.022.152-.203.017-.022.152-.205.017-.02.154-.203.016-.022.154-.203.017-.02.156-.202.017-.022.157-.202.016-.02.157-.202.016-.02.158-.2.017-.022.16-.2.016-.021.16-.2.017-.02.16-.198.017-.02.162-.198.017-.022.162-.196.016-.022.164-.196.018-.02.163-.196.018-.022.164-.195.017-.02.165-.195.018-.02.166-.195.018-.02.168-.193.016-.02.17-.194.016-.02.169-.192.017-.021.17-.19.019-.02.17-.193.018-.02.17-.189.018-.02.172-.19.019-.02.172-.19.019-.02.173-.188.018-.02.174-.187.018-.02.176-.187.017-.02.176-.186.02-.02.175-.186.02-.02.177-.185.017-.019.18-.185.018-.019.179-.184.019-.019.18-.183.019-.019.18-.183.019-.02.181-.181.02-.019.18-.182.02-.018.183-.18.019-.02.184-.18.019-.019.184-.179.019-.018.185-.18.02-.018.186-.178.02-.019.186-.177.02-.019.187-.176.02-.019.188-.175.02-.018.188-.175.02-.019.19-.174.02-.02.19-.172.02-.018.192-.173.02-.019.191-.172.02-.018.193-.17.02-.02.194-.17.02-.019.194-.169.02-.018.195-.17.02-.017.197-.169.02-.017.197-.168.02-.018.197-.166.022-.019.197-.166.02-.017.2-.167.02-.017.2-.165.02-.017.2-.165.022-.017.2-.163.02-.017.203-.162.021-.018.202-.161.02-.018.204-.162.022-.015.204-.16.02-.018.205-.16.022-.016.205-.16.021-.017.206-.157.022-.017.206-.158.022-.016.207-.156.022-.017.209-.156.021-.016.209-.155.022-.017.208-.155.024-.016.21-.153.021-.016.21-.153.024-.016.21-.152.023-.015.212-.152.022-.016.213-.15.023-.016.213-.15.023-.015.214-.15.023-.015.214-.147.023-.016.216-.148.023-.016.216-.146.023-.014.217-.146.023-.016.218-.145.022-.014.22-.145.021-.014.22-.143.023-.016.22-.142.022-.016.221-.142.024-.014.22-.14.024-.015.222-.14.023-.015.222-.139.023-.014.219-.135.01-.007 100.501-61.973.013-.007.214-.132.024-.015.22-.133.024-.016.221-.131.025-.016.22-.132.027-.014.22-.13.025-.017.222-.129.025-.014.222-.129.025-.014.223-.128.025-.014.223-.126.025-.014.224-.127.026-.012.223-.125.026-.014.224-.124.026-.014.223-.122.026-.014.225-.122.026-.013.225-.12.026-.013.225-.12.026-.013.226-.12.026-.012.226-.118.026-.013.228-.116.026-.013.226-.116.026-.013.228-.113.026-.013.227-.113.028-.013.227-.112.026-.012.23-.11.025-.014.23-.11.025-.013.23-.109.027-.011.23-.108.026-.013.23-.106.026-.013.23-.106.027-.011.231-.105.026-.013.232-.103.026-.011.232-.103.026-.012.233-.102.026-.011.232-.1.027-.012.232-.099.027-.011.233-.099.026-.012.233-.097.027-.011.234-.096.027-.012.233-.094.027-.012.235-.094.026-.01.234-.094.028-.011.234-.092.027-.011.235-.09.027-.01.236-.09.026-.012.236-.09.027-.01.236-.087.027-.01.236-.087.027-.01.236-.086.028-.01.237-.085.027-.01.237-.084.028-.009.237-.083.027-.01.237-.082.028-.01.238-.08.026-.01.239-.079.027-.01.239-.079.027-.008.239-.078.027-.008.239-.078.027-.008.24-.076.027-.009.24-.074.027-.009.239-.073.027-.009.24-.073.029-.008.24-.072.027-.007.24-.072.027-.007.242-.07.027-.007.241-.069.028-.007.24-.068.028-.008.241-.066.028-.007.241-.066.027-.007.243-.065.027-.007.243-.063.027-.007.242-.063.028-.007.243-.062.027-.006.243-.06.027-.007.243-.059.027-.007.244-.059.028-.005.242-.058.029-.007.243-.056.027-.006.244-.055.027-.006.244-.055.029-.005.243-.053.028-.006.244-.052.028-.005.244-.052.028-.006.244-.05.028-.004.245-.05.027-.005.246-.048.027-.005.245-.047.028-.006.245-.046.029-.004.244-.044.029-.006.245-.043.027-.006.246-.043.028-.004.246-.042.027-.004.247-.04.027-.006.247-.038.027-.005.247-.038.027-.005.247-.037.027-.004.247-.038.027-.002.247-.036.029-.005.245-.034.029-.003.247-.034.027-.003.247-.033.028-.003.247-.031.027-.003.249-.03.027-.005.247-.028.028-.003.247-.029.029-.003.246-.027.03-.003.246-.026.029-.002.246-.026.029-.003.247-.023.028-.003.247-.023.029-.003.248-.021.027-.003.248-.02.03-.003.246-.02.028-.001.249-.02.027-.002.248-.017.029-.003.248-.016.027-.003.248-.014.029-.003.248-.014.029-.002.247-.013.028-.001.248-.013.029-.001.248-.012.029-.001.248-.01.027-.002.248-.01h.029l.248-.008.029-.002.248-.007h.029l.248-.007h.027l.25-.006h.027l.248-.004.029-.001.248-.003h.028l.249-.002.028-.001h.554zm-.23 26.999l-.163.001-.164.001-.163.002-.164.003-.163.004-.164.004-.164.005-.163.005-.165.006-.164.007-.164.007-.163.009-.164.009-.163.01-.163.01-.163.011-.164.012-.163.012-.164.013-.164.013-.162.015-.164.015-.163.016-.163.016-.163.017-.162.019-.164.018-.162.019-.164.02-.162.02-.162.022-.164.021-.162.023-.163.023-.162.024-.162.025-.162.025-.163.026-.162.027-.16.028-.163.028-.16.029-.163.029-.161.03-.162.031-.161.032-.161.031-.161.033-.16.033-.162.035-.16.035-.162.035-.16.037-.16.037-.16.038-.16.038-.161.039-.16.039-.16.041-.159.04-.16.042-.159.043-.158.043-.16.044-.158.045-.16.044-.158.046-.158.046-.158.047-.158.049-.158.049-.158.048-.157.05-.158.05-.157.052-.157.052-.157.053-.157.053-.156.054-.157.055-.156.054-.156.058-.156.055-.155.058-.156.059-.155.058-.156.059-.154.06-.155.062-.154.06-.154.063-.154.063-.154.063-.155.065-.152.064-.153.066-.154.066-.153.067-.152.068-.152.068-.153.07-.15.07-.154.07-.151.07-.151.072-.15.073-.152.073-.15.073-.15.074-.151.076-.15.076-.149.076-.15.078-.148.077-.149.079-.148.08-.15.079-.148.081-.147.08-.147.084-.147.082-.148.084-.147.083-.147.086-.146.085-.146.086-.146.087-.144.087-.146.088-.157.097-100.464 61.95-.167.103-.152.096-.153.096-.153.097-.151.098-.152.097-.15.099-.15.099-.15.1-.15.1-.148.1-.149.102-.148.102-.148.102-.146.103-.147.103-.146.105-.144.104-.146.105-.145.106-.143.106-.143.106-.143.108-.143.107-.142.11-.14.108-.142.109-.14.109-.14.11-.14.112-.138.11-.14.112-.137.113-.138.112-.136.115-.136.113-.137.114-.135.115-.135.115-.135.116-.133.117-.134.116-.132.118-.132.117-.133.12-.13.118-.131.12-.13.118-.13.12-.129.122-.13.12-.128.123-.127.121-.126.124-.127.123-.127.123-.125.123-.124.125-.126.125-.124.126-.123.126-.122.126-.123.127-.121.127-.122.127-.121.129-.12.129-.12.129-.119.129-.118.13-.12.13-.116.131-.118.132-.115.132-.116.132-.116.131-.115.134-.114.133-.114.135-.113.133-.113.135-.112.136-.111.135-.11.136-.111.136-.11.137-.11.138-.109.137-.108.138-.107.139-.107.139-.106.139-.106.139-.105.14-.105.14-.105.141-.104.142-.102.142-.104.142-.1.142-.103.143-.101.143-.1.144-.1.144-.099.144-.098.144-.098.147-.097.144-.097.147-.096.146-.096.146-.095.147-.094.148-.094.148-.093.147-.093.15-.093.148-.091.15-.091.148-.09.15-.09.151-.089.15-.089.151-.088.15-.087.153-.088.151-.086.152-.084.154-.086.153-.085.153-.083.154-.083.153-.083.155-.082.155-.08.154-.082.155-.08.156-.08.156-.079.157-.078.156-.077.156-.078.158-.076.157-.075.158-.075.158-.075.159-.074.157-.074.16-.073.158-.071.16-.072.16-.071.16-.07.16-.07.161-.069.162-.068.16-.068.163-.067.162-.067.162-.065.162-.066.163-.064.162-.064.163-.064.165-.061.163-.063.164-.061.164-.06.165-.062.165-.058.165-.06.165-.058.166-.057.165-.057.166-.056.168-.056.166-.055.166-.054.168-.053.166-.054.168-.051.167-.052.17-.052.167-.05.169-.05.168-.049.169-.047.169-.048.17-.048.17-.046.169-.045.17-.045.17-.045.171-.044.17-.043.171-.043.172-.04.17-.041.173-.041.172-.04.172-.04.172-.038.171-.036.174-.037.172-.037.173-.036.174-.035.173-.034.173-.034.174-.033.173-.031.175-.032.173-.031.175-.03.175-.03.175-.029.175-.027.174-.028.177-.026.175-.026.176-.026.175-.025.176-.023.176-.023.176-.023.177-.022.177-.02.177-.021.177-.02.177-.02.177-.017.178-.018.178-.018.177-.015.178-.016.178-.015.177-.014.18-.013.177-.013.18-.012.178-.01.18-.012.179-.01.179-.009.179-.008.18-.007.178-.007.18-.006.18-.006.18-.004.181-.004.18-.004.18-.003.18-.001.18-.002.181v125.53l.002.178.001.177.003.177.004.178.004.176.004.178.006.176.006.177.007.176.007.176.01.176.008.177.01.176.01.175.012.176.011.175.014.176.014.175.013.175.015.174.015.175.017.175.017.175.018.173.018.175.019.174.02.174.02.174.021.173.022.174.023.173.023.172.025.173.025.172.024.174.027.172.026.172.028.172.028.171.029.172.03.171.03.172.031.17.031.171.033.17.033.171.034.17.034.171.036.17.035.17.037.169.037.169.038.169.038.17.04.168.04.168.04.169.04.168.042.167.043.168.043.168.043.167.045.166.045.168.047.166.046.167.048.166.048.165.047.166.05.166.05.165.05.165.05.164.052.165.054.164.053.164.053.164.055.163.055.163.056.164.056.162.058.162.057.163.058.162.06.16.06.162.06.162.06.16.062.161.061.16.063.161.064.16.064.158.064.16.066.158.066.16.067.159.067.157.068.158.068.157.07.158.07.158.07.156.071.156.071.156.072.155.074.156.074.155.073.155.075.155.075.154.077.154.076.154.078.152.077.154.078.153.08.152.08.152.079.152.082.152.081.15.082.15.082.15.085.151.083.15.084.148.085.15.086.149.087.149.086.147.087.148.089.147.088.146.089.147.09.147.091.146.092.145.091.145.091.145.093.144.094.144.094.144.094.144.096.142.095.143.097.142.097.142.097.14.098.142.098.14.1.14.1.141.1.14.1.138.102.14.102.137.102.137.104.138.104.137.103.137.105.137.105.135.107.136.106.135.108.134.107.134.108.134.11.134.108.133.11.132.11.132.112.131.111.132.11.13.114.131.113.13.113.13.115.128.116.13.114.127.116.127.116.128.117.127.118.127.118.126.119.124.119.125.118.125.122.124.12.124.12.123.122.123.123.122.123.122.122.121.124.12.125.121.125.12.125.12.126.118.127.12.125.117.128.117.128.118.129.116.13.116.129.116.13.115.13.114.131.114.132.114.131.112.132.113.134.112.134.112.133.11.135.112.135.11.135.11.137.108.136.107.138.11.137.107.138.106.14.107.138.106.14.105.14.105.14.104.14.103.143.105.143.102.141.103.144.1.143.102.143.1.145.1.145.1.146.098.146.1.145.097.147.097.149.098.147.096.149.094.148.096.15.095.149.093.15.093.151.093.151.092.152.092.153.091.152.09.165.098 104.694 61.195.128.075.116.066.115.066.116.066.115.064.116.065.116.064.117.063.118.063.117.063.117.062.116.06.117.062.119.06.117.06.119.059.119.059.117.057.118.059.12.057.118.056.118.056.12.056.119.054.121.056.119.053.119.053.12.054.12.052.12.052.122.053.12.05.12.05.122.05.122.05.12.049.122.047.122.049.122.047.121.046.121.047.123.046.123.046.123.045.12.044.124.043.122.043.123.043.124.043.124.042.123.04.11.037.26.083.248.079.25.076.247.073.25.071.25.07.25.067.25.066.252.063.25.061.253.06.252.058.253.054.253.053.253.052.253.049.254.047.255.044.255.043.255.04.255.039.255.037.255.035.255.033.256.03.256.028.257.026.256.025.256.022.258.02.256.02.258.015.256.014.258.012.258.01.258.007.256.006.258.004.257.001h.258l.256-.003.26-.004.256-.007.257-.009.258-.01.256-.012.258-.016.257-.016.257-.02.258-.02.256-.023.257-.026.256-.027.256-.029.255-.031.257-.035.255-.034.256-.039.255-.038.255-.042.254-.044.254-.046.254-.048.254-.05.253-.051.254-.055.252-.056.252-.058.251-.06.253-.062.25-.065.251-.066.251-.068.25-.07.25-.074.261-.078.112-.035.124-.037.124-.04.124-.039.124-.042.123-.04.123-.04.124-.043.124-.041.124-.043.121-.043.124-.045.123-.044.123-.045.122-.045.122-.046.123-.046.12-.047.125-.048.12-.047.121-.049.123-.048.121-.05.12-.05.123-.05.12-.051.12-.052.121-.053.122-.053.12-.053.12-.053.118-.053.12-.054.122-.056.12-.056.118-.057.119-.056.119-.057.12-.058.117-.059.12-.058.118-.06.118-.06.117-.06.119-.061.117-.062.119-.061.117-.063.117-.063.116-.063.116-.065.13-.072 115.92-64.56.135-.076.123-.068.123-.07.123-.072.12-.07.122-.072.123-.072.119-.071.12-.073.12-.075.12-.072.12-.074.118-.075.119-.076.117-.074.117-.076.118-.077.117-.076.116-.078.116-.077.116-.079.114-.079.116-.079.115-.08.113-.079.113-.08.113-.082.113-.081.113-.082.11-.08.113-.083.113-.085.11-.083.11-.083.11-.085.109-.084.109-.085.11-.086.108-.086.108-.086.109-.087.106-.086.107-.087.106-.09.106-.088.107-.089.105-.089.105-.09.103-.089.104-.09.104-.092.103-.092.104-.091.102-.092.101-.092.102-.093.101-.093.101-.093.1-.095.1-.094.099-.095.1-.096.097-.095.099-.096.098-.097.096-.096.099-.097.095-.098.096-.097.095-.098.097-.1.094-.099.094-.099.094-.1.094-.099.093-.1.091-.1.093-.102.093-.102.091-.102.09-.103.09-.102.091-.103.089-.103.09-.105.089-.103.087-.105.089-.104.087-.105.087-.106.086-.106.086-.106.086-.106.084-.107.086-.108.083-.106.084-.109.084-.109.082-.107.083-.108.082-.11.082-.11.08-.11.08-.108.081-.112.08-.112.078-.109.08-.111.078-.114.078-.11.076-.113.078-.113.075-.112.077-.113.076-.113.075-.115.075-.115.073-.114.074-.115.072-.113.074-.116.072-.116.071-.116.072-.117.07-.116.07-.117.07-.118.07-.117.07-.118.066-.117.068-.118.069-.119.066-.118.066-.12.067-.118.065-.12.066-.121.064-.119.062-.12.065-.122.062-.12.063-.121.063-.122.061-.122.06-.121.061-.124.06-.121.059-.124.059-.121.058-.124.059-.124.057-.124.057-.124.056-.124.056-.124.056-.125.056-.126.053-.125.055-.124.053-.126.053-.126.052-.125.052-.128.052-.126.05-.126.05-.127.05-.128.05-.127.05-.128.047-.128.048-.129.047-.127.047-.129.046-.129.046-.129.044-.129.045-.127.044-.13.045-.131.042-.13.042-.13.042-.13.041-.132.041-.13.041-.13.04-.133.04-.13.037-.132.039-.132.038-.133.038-.132.035-.13.037-.133.036-.134.034-.131.035-.134.034-.133.033-.133.033-.134.032-.134.032-.134.031-.133.03-.134.03-.135.03-.135.029-.135.028-.134.03-.135.026-.136.026-.135.026-.135.026-.136.026-.136.025-.136.023-.136.023-.136.023-.136.023-.136.02-.137.023-.137.02-.138.02-.136.02-.137.019-.138.019-.138.017-.137.017-.138.016-.139.016-.137.017-.14.015-.137.013-.139.014-.139.014-.137.012-.14.012-.14.011-.137.011-.14.011-.138.01-.14.01-.141.007-.14.008-.138.007-.142.007-.14.007-.14.005-.14.006-.14.004-.14.004-.141.003-.14.002-.141.003-.142.002-.142V133.038l-.002-.13-.001-.131-.003-.13-.003-.13-.004-.128-.004-.132-.004-.128-.005-.13-.006-.13-.007-.128-.006-.13-.007-.13-.007-.128-.01-.13-.008-.128-.01-.13-.009-.127-.01-.127-.012-.13-.01-.128-.013-.13-.012-.127-.012-.127-.014-.128-.014-.127-.015-.128-.015-.127-.016-.128-.015-.128-.016-.126-.018-.127-.016-.113-.039-.267-.038-.254-.04-.252-.044-.25-.044-.251-.048-.252-.049-.25-.05-.25-.053-.249-.055-.247-.057-.248-.059-.248-.061-.247-.062-.245-.065-.245-.067-.245-.068-.245-.071-.242-.072-.242-.075-.242-.077-.243-.077-.239-.08-.24-.083-.24-.084-.238-.086-.238-.087-.236-.09-.237-.092-.235-.094-.235-.095-.233-.097-.232-.098-.232-.101-.231-.104-.23-.103-.23-.107-.23-.109-.227-.109-.227-.112-.225-.113-.225-.116-.225-.117-.222-.119-.222-.12-.222-.124-.22-.124-.218-.125-.22-.128-.216-.13-.216-.13-.215-.134-.214-.135-.213-.137-.212-.137-.211-.14-.21-.141-.209-.143-.207-.145-.207-.147-.205-.149-.203-.149-.204-.152-.2-.153-.2-.155-.201-.156-.198-.158-.196-.16-.197-.162-.193-.162-.194-.165-.192-.166-.19-.168-.19-.17-.187-.17-.188-.173-.185-.173-.185-.176-.182-.177-.182-.179-.18-.18-.178-.182-.178-.183-.176-.184-.173-.187-.174-.188-.172-.19-.17-.19-.17-.193-.165-.193-.167-.195-.164-.197-.164-.199-.16-.21-.17-.09-.071-.1-.079-.102-.079-.1-.077-.103-.077-.103-.08-.103-.075-.102-.078-.104-.075-.103-.076-.104-.076-.105-.075-.105-.076-.105-.074-.105-.073-.106-.075-.107-.073-.106-.072-.108-.073-.106-.071-.108-.072-.109-.072-.107-.07-.11-.072-.109-.068-.109-.07-.11-.07-.11-.068-.11-.069-.112-.067-.11-.069-.112-.067-.112-.066-.124-.073-113.19-66.505-.16-.093-.146-.085-.148-.084-.148-.085-.147-.083-.15-.082-.146-.081-.15-.082-.149-.08-.149-.079-.148-.079-.15-.079-.15-.077-.15-.076-.15-.076-.152-.076-.15-.074-.15-.075-.152-.073-.152-.073-.15-.072-.152-.071-.153-.07-.151-.07-.153-.07-.153-.068-.154-.068-.153-.067-.152-.066-.154-.066-.154-.064-.154-.065-.155-.064-.154-.063-.154-.062-.155-.062-.156-.061-.154-.06-.155-.06-.156-.058-.156-.059-.156-.057-.155-.057-.157-.056-.157-.056-.157-.055-.156-.054-.157-.053-.157-.053-.157-.052-.158-.051-.158-.05-.157-.05-.158-.05-.158-.048-.159-.049-.16-.046-.157-.047-.158-.046-.16-.044-.16-.045-.158-.044-.16-.043-.159-.043-.16-.041-.159-.04-.16-.042-.16-.039-.16-.039-.16-.038-.162-.037-.159-.038-.16-.037-.162-.034-.16-.036-.162-.035-.16-.033-.161-.033-.163-.031-.16-.032-.161-.031-.163-.03-.162-.029-.16-.028-.163-.03-.162-.026-.163-.028-.162-.025-.162-.025-.162-.024-.163-.024-.162-.023-.162-.023-.164-.022-.162-.021-.162-.02-.164-.02-.162-.02-.164-.02-.162-.016-.164-.018-.163-.015-.163-.016-.163-.016-.164-.014-.163-.013-.164-.013-.164-.013-.162-.011-.164-.012-.163-.01-.164-.008-.163-.01-.164-.008-.164-.008-.163-.006-.165-.007-.164-.004-.164-.006-.163-.004-.164-.003-.163-.003-.164-.002-.164-.001-.163-.001h-.165z'
    />
    <path
      fill='#fff'
      fillRule='nonzero'
      d='M120.628 303.613V96.39h43.355v75.48h71.915v-75.48h43.48v207.222h-43.48v-90.606h-71.915v90.606h-43.355z'
    />
  </Svg>
)
