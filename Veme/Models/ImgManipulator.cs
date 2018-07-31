using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Web;

namespace Veme.Models
{
    public static class ImgManipulator
    {
        public static byte[] ConvertImgToByteArray(HttpPostedFileBase ImgFile)
        {
            //1. Get stream from Image file and return byte Array
            //var stream = uploadedImg.InputStream;
            var stream = ImgFile.InputStream;
            var buffer = new byte[stream.Length];
            stream.Read(buffer, 0, buffer.Length);
            var ms = new MemoryStream(buffer);
            return ms.ToArray();
            #region Convert StreamTo Img
            //convert stream into image
            //Image myImage = Image.FromStream(new MemoryStream(buffer));
            //myImage.Save(@"c:\myimage.jpg");
            //using (var ms = new MemoryStream())
            //{
            //    OfferImg.Save(ms, OfferImg.RawFormat);
            //    return ms.ToArray();
            //}
            #endregion
        }

        public static Image ByteArrayToImg(byte[] byteArray)
        {
            MemoryStream ms = new MemoryStream(byteArray);
            //Image returnImage = Image.FromStream(ms);
            return Image.FromStream(ms);
        }

    }
}