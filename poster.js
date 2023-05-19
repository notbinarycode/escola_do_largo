osc(20,0.02,0.2)
.posterize(1.004)
.kaleid(1.2)
.scrollY(0,0)
.scale(0.4,0.6,0.3)
.add(src(s1).mult(src(s0).scroll(0,0.5,-0.04,0))
    .scale(0.5)
    .repeat(4,4)
    .scrollX(0,0.002)
  ).invert()
  .sub(shape(4).scale(1.1,1, 0.53).scroll(-0.25,-0.28))
.out(o2)


src(s3).scale(0.5, 0.5).scroll(0,0.16,-0.005).mask(shape(4).scale(1.1,1, 0.53).scroll(-0.25,-0.28))
.sub(src(s2).scale(0.2).scroll(0,0.3,0.003).invert())
//.scale(0.2,1.3).scroll(0,0.05, -0.001).mult(shape(4).scroll(-0.25,-0.25)).mask(shape(4).scroll(-0.25,-0.25))
.out(o1)



src(o2).add(o1).out()


s0.initImage("https://raw.githubusercontent.com/notbinarycode/escola_do_largo/main/images/kaotec.png")

s1.initImage("https://raw.githubusercontent.com/notbinarycode/escola_do_largo/main/images/guido.png")


s2.initImage("https://raw.githubusercontent.com/notbinarycode/escola_do_largo/main/images/nariz_.png")

s3.initImage("https://raw.githubusercontent.com/notbinarycode/escola_do_largo/main/images/largo.png")
