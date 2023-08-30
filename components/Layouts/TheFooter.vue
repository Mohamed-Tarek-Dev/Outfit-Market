<template>
  <footer class="theFooter">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" sm="12">
          <div class="footer_section">
            <logo alt="footer logo" class="mb-2 logo" />

            <p class="copyright">
              Copyright &copy; {{ new Date().getFullYear() }} All Rights Reserved | <br />
              Made With
              <Icon name="material-symbols:favorite" />
              By
              <span class="colored"
                ><a target="_blank" href="https://www.linkedin.com/in/mohamedtarek007"
                  >Mohamed Tarek</a
                ></span
              >
            </p>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <div class="footer_section">
            <h3 class="h_3">Company Info</h3>
            <ul class="links">
              <li>About Us</li>
              <li>How to Shop</li>
              <li>FAQs</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="2" sm="6">
          <div class="footer_section">
            <h3 class="h_3">Help & Support</h3>
            <ul class="links">
              <li>Returns</li>
              <li>Contact Us</li>
              <li>Size Guide</li>
              <li>Returns Policy</li>
            </ul>
          </div>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <div class="footer_section">
            <h3 class="h_3">Newsletter</h3>
            <div class="mail">
              <base-input
                v-model="email"
                name="email"
                variant="solo"
                single-line
                type="email"
                label="Your Email Here"
              >
                <template #appendInner>
                  <BaseButton aria-label="SUBSCRIBE" class="inputButton">SUBSCRIBE</BaseButton>
                </template>
              </base-input>
            </div>
            <h3 class="h_3">Download the App</h3>
            <div class="icons">
              <span class="apple"
                ><a aria-label="apple store link" href="https://github.com/Mohamed-Tarek-Dev"
                  ><Icon name="mdi:apple" /></a
              ></span>
              <span class="andriod"
                ><a aria-label="andriod store link" href="https://github.com/Mohamed-Tarek-Dev"
                  ><Icon name="bi:android2" /></a
              ></span>
            </div>
          </div>
        </v-col>
      </v-row>

      <hr />
      <div class="_icons">
        <span class="facebook"
          ><a aria-label="facebook link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="ri:facebook-fill" /></a
        ></span>
        <span class="instagram"
          ><a aria-label="instagram link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="ion:logo-instagram" /></a
        ></span>
        <span class="twitter"
          ><a aria-label="twitter link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="bi:twitter" /></a
        ></span>
        <span class="youtube"
          ><a aria-label="youtube link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="bi:youtube" /></a
        ></span>
        <span class="whatsApp"
          ><a aria-label="whatsApp link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="ic:outline-whatsapp" /></a
        ></span>
        <span class="tiktok"
          ><a aria-label="tiktok link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="formkit:tiktok" /></a
        ></span>
        <span class="linkedin"
          ><a aria-label="linkedin link" href="https://github.com/Mohamed-Tarek-Dev"
            ><Icon name="akar-icons:linkedin-box-fill" /></a
        ></span>
      </div>
    </v-container>
  </footer>
</template>

<script setup>
const email = ref(null);
</script>

<style lang="scss">
.theFooter {
  padding: 2rem 0;
  background: var(--main_bg);

  @media (max-width: 960px) {
    text-align: center;

    .logo {
      display: flex;
      justify-content: center;
    }
  }

  .footer_section {
    .copyright {
      svg.icon {
        color: red;
      }
    }

    ul.links {
      li {
        margin-bottom: 3px;
        color: var(--para);
        cursor: pointer;

        &:hover {
          transition: color 0.2s linear;
          color: var(--main);
        }
      }
    }

    .mail {
      display: flex;

      .v-field {
        padding-inline-end: 0 !important;
      }

      .inputButton {
        height: 100%;
      }
    }

    .icons {
      span {
        svg.icon {
          color: #909eac;
          font-size: 25px;
          margin-inline-end: 7px;
        }

        &:hover {
          &.apple {
            svg.icon {
              color: var(--appple);
            }
          }
          &.andriod {
            svg.icon {
              color: var(--andriod);
            }
          }
        }
      }
    }
  }

  hr {
    background: #909eac;
    margin-block: 30px;
  }

  ._icons {
    display: flex;
    justify-content: center;
    align-content: center;

    span {
      margin-inline: 30px;

      @media (max-width: 700px) {
        margin-inline: 11px;
      }

      svg.icon {
        color: #909eac;
        font-size: 32px;
        transition: color 0.3s ease-in-out;
      }

      &:hover {
        &.facebook {
          svg.icon {
            color: var(--facebook);
          }
        }
        &.tiktok {
          svg.icon {
            color: var(--tiktok);
          }
        }
        &.instagram {
          svg.icon {
            color: var(--instagram);
          }
        }
        &.youtube {
          svg.icon {
            color: var(--youtube);
          }
        }
        &.linkedin {
          svg.icon {
            color: var(--linkedin);
          }
        }
        &.whatsApp {
          svg.icon {
            color: var(--whatsApp);
          }
        }
        &.twitter {
          svg.icon {
            color: var(--twitter);
          }
        }
      }
    }
  }
}
</style>
