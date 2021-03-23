import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import { Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

function TreeSegmentSarah(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={windowWidth}
      height={windowWidth * (39 / 90)}
      viewBox="0 0 90 39"
      {...props}
    >
      <Path fill="purple" d="M40.5 0h9v39h-9z" />
      <Path fill="#0ff" d="M0 0h40.5v39H0zM49.5 0H90v39H49.5z" />
      <G fill="#784421" stroke="#000" strokeWidth={0.054}>
        <Path d="M8.48 11.624c-.11.07-.207.16-.284.266-.15.208-.217.467-.243.722-.037.361 0 .726.033 1.087.04.428.074.858.16 1.28.104.512.286 1.009.527 1.474.298.576.685 1.1 1.02 1.656.279.464.537.966.976 1.281.22.158.484.263.755.262a.976.976 0 00.394-.082.837.837 0 00.486-.609c.03-.131.038-.267.032-.401-.011-.27-.072-.534-.094-.803-.039-.478.056-.978.332-1.37.215-.305.526-.531.857-.703.259-.133.532-.238.814-.31-.561-.151-1.122-.3-1.684-.448-.474-.124-.953-.248-1.38-.485-.508-.28-.918-.706-1.295-1.147-.173-.202-.346-.42-.4-.68-.024-.115-.024-.232-.03-.35a.995.995 0 00-.061-.342.631.631 0 00-.402-.352.68.68 0 00-.513.054zM14.363 10.206a.442.442 0 00-.148.237c-.033.137.002.28.018.42.032.266 0 .536.016.804.025.428.174.837.268 1.256.077.348.117.709.25 1.04.104.261.263.496.411.733.181.29.355.592.614.813.157.135.341.235.534.31a2.297 2.297 0 001.57.049 1.21 1.21 0 00.456-.262.66.66 0 00.212-.469.73.73 0 00-.092-.324c-.052-.1-.118-.193-.18-.288-.127-.19-.24-.388-.39-.56-.187-.215-.424-.379-.644-.56-.352-.29-.67-.634-.862-1.047-.129-.278-.198-.58-.311-.864-.088-.222-.203-.432-.308-.646-.088-.177-.17-.358-.27-.53a1.2 1.2 0 00-.155-.221.54.54 0 00-.221-.15.584.584 0 00-.327 0 .94.94 0 00-.441.259z" />
      </G>
      <Path
        d="M42.308 7.659L28.41 7.392 14.913 9.93 9.166 11.8l-4.276.535-2.673-.935-1.603 1.737 1.737-.134 1.47.668 3.608.134 1.737-.668 6.682-.802 8.42-2.138 9.487-.134 7.751 1.871z"
        fill="purple"
      />
      <G stroke="#000">
        <Path
          d="M11.426 11.27a1.07 1.07 0 00-.322.15c-.18.125-.32.304-.422.498a3.3 3.3 0 00-.235.614 20.351 20.351 0 00-.377 1.557c-.306 1.438-.594 2.92-.346 4.369.072.415.187.824.358 1.21a4.2 4.2 0 001.321 1.674c.722.536 1.608.806 2.492.973.664.126 1.343.198 2.016.145.56-.045 1.107-.174 1.65-.311a59.533 59.533 0 002.906-.811l1.77-.952c.127.346.244.695.35 1.047.18.598.33 1.206.472 1.814.161.693.313 1.39.566 2.055.045.12.098.244.197.327.04.034.089.06.14.071a.26.26 0 00.156-.011.31.31 0 00.123-.1c.032-.042.058-.089.083-.136.121-.227.246-.453.35-.69.19-.441.303-.915.37-1.392.146-1.056.073-2.128.098-3.194.02-.807.094-1.611.166-2.415.044-.488.087-.976.128-1.464.24-.57.412-1.168.515-1.778a5.63 5.63 0 00.05-1.693c-.067-.487-.221-.969-.505-1.37a2.374 2.374 0 00-.773-.697c-.372-.209-.795-.312-1.216-.383a7.457 7.457 0 00-1.343-.11c-.605.008-1.213.105-1.772.336-.513.212-.98.537-1.343.957a3.151 3.151 0 00-.712 1.45c-.058.304-.07.614-.087.922-.01.188-.025.378-.089.555a.827.827 0 01-.136.245.6.6 0 01-.22.17c-.134.058-.285.058-.43.051-.364-.019-.727-.079-1.092-.068-.6.018-1.176.224-1.748.403-.387.122-.781.233-1.14.421-.238.124-.459.281-.654.464a4.168 4.168 0 01-.225-.854l-.314-1.807c-.081-.468-.168-.938-.173-1.413-.001-.102 0-.204-.01-.305a.7.7 0 00-.088-.29.504.504 0 00-.504-.234z"
          fill="#d38d5f"
          strokeWidth={0.054}
        />
        <Path
          d="M18.77 12.782c.056-.394.224-.77.481-1.074.21-.248.476-.446.769-.588a3.4 3.4 0 01.551-.206 4.77 4.77 0 01.804-.158c.176-.015.355.005.523.06.147.047.288.12.441.138a.917.917 0 00.325-.03c.107-.027.21-.064.315-.093.231-.064.475-.091.712-.056.361.054.684.247 1 .43.123.071.247.142.36.229a.994.994 0 01.281.318c.054.104.083.218.113.331.082.305.181.62.128.93-.044.254-.185.48-.336.688-.234.322-.506.625-.843.836-.315.197-.676.308-1.036.399-.431.109-.87.193-1.314.225-.47.034-.95.007-1.402-.125a2.845 2.845 0 01-.82-.386 2.487 2.487 0 01-.714-.75 2.354 2.354 0 01-.337-1.118z"
          fill="#e9c6af"
          strokeWidth={0.054}
        />
        <Path
          d="M18.77 12.782c.105-.092.214-.18.326-.261a2.25 2.25 0 01.364-.223c.309-.145.656-.18.992-.24.06-.011.12-.023.181-.026a.424.424 0 01.18.026c.055.022.103.06.143.105a.483.483 0 01.104.193c.019.071.02.147.004.219a.642.642 0 01-.204.314c-.138.127-.303.219-.465.312a1.892 1.892 0 00-.452.329c-.105.113-.183.249-.27.377-.088.128-.187.25-.294.362M25.56 13.085a3.125 3.125 0 00-.634-.508c-.18-.109-.372-.2-.577-.246a.963.963 0 00-.372-.017.768.768 0 00-.385.192.502.502 0 00-.159.253.43.43 0 00.013.218.65.65 0 00.103.195c.074.098.168.18.244.276.156.199.227.448.316.685.056.15.12.295.193.437M21.498 12.597a.346.346 0 01.12-.368.46.46 0 01.238-.086c.085-.008.171 0 .256.008.239.025.478.055.718.039.039-.003.078-.007.117-.006.039.001.079.008.114.025.041.02.075.055.097.096.022.04.032.087.032.134-.001.092-.042.18-.097.255a.858.858 0 01-.262.234 1.112 1.112 0 01-.315.122 1.259 1.259 0 01-.627-.017.66.66 0 01-.205-.093.459.459 0 01-.186-.343z"
          fill="none"
          strokeWidth={0.054}
        />
        <Path
          d="M21.718 12.167a1.023 1.023 0 01.674-.431.656.656 0 01.2-.006c.066.01.131.033.184.075.08.063.125.161.18.248.035.055.074.106.118.153M21.498 12.597a.293.293 0 01.367.127c.017.03.028.064.031.1a.204.204 0 01-.016.102.185.185 0 01-.081.085M22.676 13.002a.39.39 0 01-.025-.118.305.305 0 01.01-.101.208.208 0 01.133-.144.243.243 0 01.1-.012c.066.006.13.037.175.086"
          fill="none"
          strokeWidth={0.054}
        />
        <Path
          d="M19.3 14.114a2.271 2.271 0 01-.441-.946c-.05-.235-.06-.358-.032-.389a3.05 3.05 0 01.173-.14c.427-.33.612-.406 1.254-.515.248-.041.39-.06.441-.056.225.015.394.277.329.51a.543.543 0 01-.164.26c-.103.102-.189.162-.464.324-.235.139-.374.238-.47.335a3.69 3.69 0 00-.224.3c-.146.209-.21.292-.302.397-.018.02-.027.014-.1-.08zM24.318 14.525a4.856 4.856 0 01-.215-.511c-.16-.426-.198-.494-.407-.729-.152-.17-.198-.246-.224-.367-.034-.162.036-.307.21-.436.193-.144.395-.177.674-.11.271.065.577.225.863.453.199.158.292.252.29.292-.003.068-.124.299-.261.498-.221.32-.424.547-.657.736-.152.123-.261.192-.273.174zM22.83 12.158a4.633 4.633 0 01-.626-.03 4.728 4.728 0 00-.343-.023l-.054.003.038-.043c.204-.224.568-.354.801-.283.099.03.151.08.252.239.09.143.096.13-.068.137z"
          fill="#deaa87"
          strokeWidth={0.014}
        />
        <Path
          d="M22.308 13.047a1.345 1.345 0 01-.314-.027l-.108-.023.023-.055a.27.27 0 00-.072-.307.317.317 0 00-.23-.09c-.079 0-.083-.005-.073-.077a.347.347 0 01.107-.21c.048-.043.07-.052.164-.072.096-.02.142-.019.398.007.357.036.407.038.612.03a.963.963 0 01.21.01c.13.044.17.22.082.37l-.034.059-.043-.024c-.107-.062-.262-.05-.338.026a.301.301 0 00-.07.244l.009.08-.144.028c-.08.016-.16.03-.18.03z"
          fill="#a05a2c"
          strokeWidth={0.014}
        />
        <Path
          d="M21.713 12.914a.496.496 0 01-.168-.25c-.008-.038-.005-.046.021-.051a.31.31 0 01.195.051.24.24 0 01.1.17c.001.05-.033.12-.062.126-.01.002-.048-.019-.086-.046zM22.69 12.91c-.014-.067.015-.167.06-.203a.212.212 0 01.204-.029c.033.013.062.03.064.04.005.022-.13.138-.216.185l-.086.046c-.01.006-.019-.007-.026-.039z"
          fill="#502d16"
          strokeWidth={0.014}
        />
        <Path
          d="M19.964 12.657a.304.304 0 01.192-.198.526.526 0 01.262-.001c.043.008.085.017.127.027M23.946 12.738c.096-.03.2-.033.297-.008a.343.343 0 01.08.03.2.2 0 01.065.055c.019.024.03.054.037.083.007.03.01.06.015.09.008.058.02.115.036.17M21.24 13.021a1.46 1.46 0 00.801.397c.328.052.672-.002.968-.152M22.147 13.08l-.074.318M20.471 11.742l.382-.075M24.409 12.045a.405.405 0 01.202.216M23.138 23.586c.057.091.127.173.208.243.078.067.166.122.256.171.084.045.17.084.263.101a.78.78 0 00.37-.03c.226-.07.43-.21.583-.392.106-.126.189-.272.242-.427M23.628 24.022c.028.211.05.423.065.636.012.173.02.346.04.518.016.146.04.292.071.436"
          fill="none"
          strokeWidth={0.054}
        />
        <Path
          d="M24.424 23.996c-.009.121-.02.242-.036.363a1.632 1.632 0 01-.152.552c-.07.153-.161.297-.214.456-.034.103-.052.211-.053.32"
          fill="none"
          strokeWidth={0.054}
        />
        <Path
          d="M23.868 25.604c-.033-.025-.05-.083-.066-.214-.03-.26-.113-1.162-.114-1.234v-.062l.126.034c.1.026.174.024.338-.01.131-.027.213-.033.217-.016.01.048-.043.412-.078.535a3.97 3.97 0 01-.173.41 2.9 2.9 0 00-.172.443c-.03.13-.039.144-.078.114zM23.69 25.339c-.063-.104-.368-1.11-.456-1.502l-.014-.065.059.055c.032.03.117.094.189.14.124.083.13.093.141.217.042.503.09 1.032.1 1.11.008.072.004.082-.019.045z"
          fill="#e9c6af"
          strokeWidth={0.027}
        />
        <Path
          d="M24.013 25.628c-.014-.066.083-.344.202-.579.129-.254.206-.53.232-.832.017-.193.02-.2.13-.27.062-.039.175-.138.25-.22.077-.083.14-.147.14-.142.01.045-.145.648-.222.867-.098.28-.375.854-.514 1.068-.078.119-.202.18-.218.108z"
          fill="#e9c6af"
          strokeWidth={0.027}
        />
      </G>
      <G stroke="#000" strokeWidth={0.054}>
        <Path
          d="M14.363 10.206a.381.381 0 00-.154.176.336.336 0 00.008.283c.022.046.051.088.083.128.065.078.143.145.207.223.069.084.121.178.19.26.124.148.293.248.447.364.116.087.227.186.362.237a.644.644 0 00.278.037.453.453 0 00.169-.044.263.263 0 00.122-.12.332.332 0 00.02-.176 1.013 1.013 0 00-.115-.345c-.056-.108-.122-.21-.183-.317-.118-.206-.212-.426-.327-.634a1.136 1.136 0 00-.115-.178.48.48 0 00-.163-.132.54.54 0 00-.325-.027.966.966 0 00-.504.265z"
          fill="#e9c6af"
        />
        <Path
          d="M14.363 10.206c.139.196.28.39.422.584.163.222.33.444.543.619.097.08.202.148.307.215.115.073.23.145.347.216M14.913 9.93c.048.16.108.315.179.465.104.22.232.426.365.629.056.085.113.17.174.253a2.5 2.5 0 00.443.456"
          fill="none"
        />
        <Path
          d="M8.48 11.624a.605.605 0 01.772.096.659.659 0 01.147.256c.053.169.042.352.006.525-.055.262-.167.51-.31.737-.084.13-.178.255-.235.398-.02.052-.036.106-.063.154a.257.257 0 01-.051.065.17.17 0 01-.072.04.174.174 0 01-.091-.004.287.287 0 01-.082-.041.73.73 0 01-.216-.283c-.09-.181-.158-.373-.246-.556-.038-.077-.08-.155-.094-.24a.578.578 0 01.009-.212c.015-.07.037-.137.057-.205.033-.112.058-.226.107-.331a.908.908 0 01.221-.293c.044-.04.091-.075.141-.106z"
          fill="#e9c6af"
        />
        <Path
          d="M8.633 11.544a4.181 4.181 0 00-.182.64c-.057.286-.084.583-.014.865.039.16.108.31.156.466.035.118.059.24.07.362M9.156 11.665c-.052.136-.106.27-.162.404-.067.157-.137.315-.174.482-.034.149-.04.304-.024.456.017.158.057.314.12.46"
          fill="none"
        />
      </G>
    </Svg>
  );
}

export default TreeSegmentSarah;
